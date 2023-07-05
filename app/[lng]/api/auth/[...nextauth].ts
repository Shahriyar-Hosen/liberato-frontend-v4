import { apiUrl } from '@/utils/api';
/* eslint-disable no-param-reassign */
import NextAuth, { AuthOptions, User, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      // @ts-expect-error
      async authorize(credentials) {
        const user = await (
          await fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
          })
        ).json();

        if (user.role) {
          return {
            name: user.username,
            email: user.email,
            image: user.avatar,
            role: user.role,
            timestamp: user.timestamp,
            token: user.token,
          };
        }
        return Promise.reject(new Error(user.message));
      },
    }),
  ],
  pages: {
    signIn: '/login',
    signOut: '/logout',
    error: '/login',
  },
  callbacks: {
    // @ts-ignore
    async jwt({ token, user }: { token: JWT; user: User }) {
      if (user) {
        token.token = user.token;
        token.timestamp = user.timestamp;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user.role = token.role;
      session.user.token = token.token;
      session.user.name = token.name;
      return session;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
  secret: 'supersecret',
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60,
  },
  jwt: {
    // @ts-ignore
    signingKey: process.env.NEXTAUTH_SECRET,
    verificationOptions: {
      algorithms: ['HS256'],
    },
  },
};

export default NextAuth(authOptions);
