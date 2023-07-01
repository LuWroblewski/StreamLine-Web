import { Client } from 'pg';
import * as dotenv from 'dotenv';
import { NextResponse } from 'next/server';
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

export async function POST(request: Request) {
  const data = await request.json();
  await client.connect();

  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const query = {
      text: 'INSERT INTO users (firstName, lastName, email, password) VALUES ($1, $2, $3, $4)',
      values: [data.name, data.lastname, data.email, hashedPassword],
    };
    await client.query(query);
    console.log('Dados inseridos com sucesso!');
    return NextResponse.json({ message: 'Dados inseridos com sucesso!', status: 200 });
  } catch (error) {
    console.error('Ocorreu um erro ao inserir os dados: ', error);
    return NextResponse.json({ message: 'Ocorreu um erro ao inserir os dados.', status: 500 });
  }
}
