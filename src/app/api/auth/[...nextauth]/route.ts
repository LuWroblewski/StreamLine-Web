import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import * as dotenv from 'dotenv';

dotenv.config();

type ICredentials = {
  email: string;
  password: string;
};

const secretAuth = process.env.NEXTAUTH_SECRET;
const url = process.env.NEXTAUTH_URL;

const authOptions = {
  secret: secretAuth,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},

      async authorize(credentials: Record<never, string> | undefined) {
        const { email, password } = credentials as ICredentials;
        console.log(email, password);
        const res = await fetch(`${url}/api/auth/loginValidate/`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        const user = await res.json();

        if (user) {
          return { ...user, jwt: user.jwt };
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    maxAge: 60 * 60 * 24,
  },
  pages: {
    signIn: '/login',
  },
};
const nextAuthHandler = NextAuth(authOptions);

export { nextAuthHandler as GET, nextAuthHandler as POST };
