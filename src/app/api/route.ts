import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const user = process.env.PGUSER;
const host = process.env.PGHOST;
const database = process.env.PGDATABASE;
const password = process.env.PGPASSWORD;
const userEmail = process.env.USER_EMAILTESTE;
const pass = process.env.USER_PASSWORD;

export async function GET() {
  const db = new Client({
    connectionString: `postgresql://${user}:${password}${host}/${database}`,
    ssl: true,
  });

  try {
    await db.connect();
    console.log('Conexão bem-sucedida ao banco de dados');
    return new Response('Conexão bem-sucedida ao banco de dados', {
      status: 200,
    });
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    return new Response('Erro ao conectar ao banco de dados', {
      status: 500,
    });
  }
}
