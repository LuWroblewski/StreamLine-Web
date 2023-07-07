import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { User } from 'next-auth';
import * as dotenv from 'dotenv';
import { client } from '../../connection';
import bcrypt from 'bcrypt';

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

      authorize: async (credentials) => {
        const { email, password } = credentials as ICredentials;

        await client.connect();

        const query = {
          text: 'SELECT password FROM users WHERE email = $1',
          values: [email],
        };

        const result = await client.query(query);

        if (result.rows.length === 0) {
          return null;
        }

        const hashedPassword = result.rows[0].password;

        const isPasswordValid = await bcrypt.compare(password, hashedPassword);

        if (isPasswordValid) {
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

            return {
              id: email,
              name: `${userProfile.firstname} ${userProfile.lastname}`,
            };
          } else {
            return null;
          }
        } else if (!isPasswordValid) {
          return null;
        }

        return null;
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
