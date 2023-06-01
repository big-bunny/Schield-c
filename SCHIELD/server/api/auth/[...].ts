import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import EmailProvider from 'next-auth/providers/email';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaClient } from '@prisma/client';
import { NextApiHandler } from 'next';
import { NuxtAuthHandler } from '#auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
export default NuxtAuthHandler({
  secret: process.env.NUXT_SECRET, // The secret used for signing cookies. It should be a long and random string.
  providers: [
    GithubProvider.default({
      clientId: process.env.GITHUB_CLIENT_ID, // The client ID of your GitHub OAuth application
      clientSecret: process.env.GITHUB_CLIENT_SECRET, // The client secret of your GitHub OAuth application
    }),
    GoogleProvider.default({
      clientId: process.env.GOOGLE_CLIENT_ID, // The client ID of your Google OAuth application
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // The client secret of your Google OAuth application
      allowDangerousEmailAccountLinking: true, // Allow linking multiple accounts with the same email
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
        email: { label: "Email", type: "text", placeholder: "Enter your email" }, // Defines the email field in the login form
        password: { label: "Password", type: "password" }, // Defines the password field in the login form
      },
      authorize: async (credentials) => {
        // Check if the user exists in the database
        const existingUser = await findUserByEmail(credentials.email);
        if (existingUser) {
          return existingUser; // Return the existing user if found
        }

        // Create a new user
        const user = {
          username: credentials.email, // Use email as the username or provide a different unique identifier
          password: credentials.password,
          name: 'John Doe', // Modify to use the provided name
          email: credentials.email,
        };

        const client = await pool.connect();
        try {
          // Insert the new user into the database
          await client.query('INSERT INTO users (username, password, name, email) VALUES ($1, $2, $3, $4)', [
            user.username,
            user.password,
            user.name,
            user.email,
          ]);

          return user;
        } catch (error) {
          console.error('Error storing user data in the database:', error);
          return null;
        } finally {
          client.release();
        }
      },
    }),
  ],
});

async function findUserByEmail(email) {
  // Implement your logic to find a user by email in the database
  // Return the user object if found, or null if not found
  // This is just a placeholder implementation, you should replace it with your own database query or ORM logic
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error finding user in the database:', error);
    return null;
  } finally {
    client.release();
  }
}
