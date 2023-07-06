import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import * as dotenv from 'dotenv';
import { client } from '../../connection';

dotenv.config();

type ICredentials = {
  email: string;
  password: string;
};

let userProfile = {
  firstname: undefined,
  lastname: undefined,
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
          await client.connect();
          const query = {
            text: 'SELECT firstname, lastname FROM users WHERE email = $1',
            values: [email],
          };

          const result = await client.query(query);

          if (result.rows.length > 0) {
            const dbUser = result.rows[0];

            userProfile = {
              firstname: dbUser.firstname,
              lastname: dbUser.lastname,
            };
            console.log(userProfile);

            return {
              ...user,
              jwt: user.jwt,
              name: `${userProfile.firstname} ${userProfile.lastname} `,
            };
          } else {
            return { ...user, jwt: user.jwt };
          }
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
