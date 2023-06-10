import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import {NuxtAuthHandler}  from '#auth';
import GoogleProvider from 'next-auth/providers/google';

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
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        // Add your own logic to authenticate the user with the provided credentials
        const user = await yourAuthenticationFunction(credentials.username, credentials.password);
        
        if (user) {
          // Return an object with the user data to be stored in the session
          return Promise.resolve(user);
        } else {
          // If authentication fails, return null or throw an error
          return Promise.resolve(null);
        }
      }
    }),
  ],
});
