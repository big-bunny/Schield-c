// Import the required dependencies
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import EmailProvider from 'next-auth/providers/email';
import { NuxtAuthHandler } from '#auth';
import GoogleProvider from 'next-auth/providers/google';
import { getPrismaClient } from '../../db';

export default NuxtAuthHandler({
  secret: process.env.NUXT_SECRET,
  providers: [
    GithubProvider.default({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider.default({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
        };
      },
    }),
    CredentialsProvider.default({
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter your email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const prisma = getPrismaClient();

        // Check if the user exists in the database
        const existingUser = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (existingUser && existingUser.password === credentials.password) {
          return existingUser;
        }

        // Authentication failed

        // Create a new user
        const newUser = await prisma.user.create({
          data: {
            email: credentials.email,
            password: credentials.password,
            name: 'John Doe',
          },
        });

        return newUser;
      },
    }),
  ],
  pages: {
    signIn: '../../../components/AuthenticationStatus.vue',
  },
});
