import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { client } from '../../connection';

export async function POST(request: Request) {
  const data = await request.json();
  await client.connect();

  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const query = {
      text: 'INSERT INTO users (avatar, firstName, lastName, email, password) VALUES ($1, $2, $3, $4, $5)',
      values: [data.avatar, data.name, data.lastname, data.email, hashedPassword],
    };
    await client.query(query);
    console.log('Dados inseridos com sucesso!');
    return NextResponse.json({ message: 'Dados inseridos com sucesso!', status: 200 });
  } catch (error) {
    console.error('Ocorreu um erro ao inserir os dados: ', error);
    return NextResponse.json({ message: 'Ocorreu um erro ao inserir os dados.', status: 500 });
  }
}
