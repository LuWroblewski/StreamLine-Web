import { Client } from 'pg';
import * as dotenv from 'dotenv';
import { NextRequest } from 'next/server';
import bcrypt from 'bcrypt';

dotenv.config();

const user = process.env.PGUSER;
const host = process.env.PGHOST;
const database = process.env.PGDATABASE;
const password = process.env.PGPASSWORD;

const client = new Client({
  connectionString: `postgres://${user}:${password}${host}/${database}`,
  ssl: true,
});

export async function POST(req: NextRequest) {
  const data = await req.json();

  await client.connect();

  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const query = {
      text: 'INSERT INTO users (firstName, lastName, email, password) VALUES ($1, $2, $3, $4)',
      values: [data.name, data.lastname, data.email, hashedPassword],
    };
    await client.query(query);
    console.log('Dados inseridos com sucesso!');
    return new Response('Dados inseridos com sucesso!', {
      status: 200,
    });
  } catch (error) {
    console.error('Ocorreu um erro ao inserir os dados: ', error);
    return new Response('Ocorreu um erro ao inserir os dados.', {
      status: 500,
    });
  }
}
