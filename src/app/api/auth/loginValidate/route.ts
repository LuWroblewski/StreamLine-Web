import { NextResponse } from 'next/server';
import { client } from '../../connection';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  const data = await request.json();

  await client.connect();

  try {
    const query = {
      text: 'SELECT password FROM users WHERE email = $1',
      values: [data.email],
    };

    const result = await client.query(query);

    if (result.rows.length === 0) {
      return false;
    }
    const hashedPassword = result.rows[0].password;

    const isPasswordValid = await bcrypt.compare(data.password, hashedPassword);

    if (isPasswordValid) {
      console.log('Email e senha conferem!');
      return NextResponse.json({ message: 'Email e senha conferem!', status: 200 });
    } else {
      console.log('Email e senha inválidos!');
      return NextResponse.json({ message: 'Email e senha inválidos!', status: 418 });
    }
  } catch (error) {
    console.error('Ocorreu um erro no servidor: ', error);
    return NextResponse.json({ message: 'Ocorreu um erro no servidor.', status: 500 });
  }
}
