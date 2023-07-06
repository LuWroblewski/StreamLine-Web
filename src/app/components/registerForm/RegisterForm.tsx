'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

export default function RegisterForm() {
  const { data: session } = useSession({
    required: true,
  });

  console.log(session);

  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: any) => {
    await fetch('./api/auth/register/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        lastname: lastname,
        email: email,
        password: password,
      }),
    });
  };

  return (
    <form className=' w-auto items-center box-border p-4 lg:px-96 text-[#767676]' onSubmit={handleSubmit}>
      <p>{session?.user?.name}</p>
      <h1 className=' text-center font-titillium font-bold lg:text-[5vh]'> Bem vindo!</h1>
      <p className=' text-center  font-titillium font-bold lg:text-[2vh]'>
        Por favor, preencha as seguintes informações para completar o registro:
      </p>

      <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <div className='sm:col-span-3 '>
          <label className='block text-lg font-medium leading-6 text-blue-900 font-titillium'>Nome</label>
          <div className='mt-2'>
            <input
              type='text'
              placeholder='Nome'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-2 font-titillium placeholder:text-gray-400 placeholder:p-2 '
            />
          </div>
        </div>

        <div className='sm:col-span-3 '>
          <label className='block text-lg font-medium leading-6 text-blue-900 font-titillium'>Sobrenome</label>
          <div className='mt-2'>
            <input
              type='text'
              placeholder='Sobrenome'
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              required
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-2 font-titillium placeholder:text-gray-400 placeholder:p-2 '
            />
          </div>
        </div>

        <div className='sm:col-span-3 '>
          <label className='block text-lg font-medium leading-6 text-blue-900 font-titillium'>Email</label>
          <div className='mt-2'>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-2 font-titillium placeholder:text-gray-400 placeholder:p-2 '
            />
          </div>
        </div>

        <div className='sm:col-span-3 '>
          <label className='block text-lg font-medium leading-6 text-blue-900 font-titillium'>Senha</label>
          <div className='mt-2'>
            <input
              type='password'
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-2 font-titillium placeholder:text-gray-400 placeholder:p-2 '
            />
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6 relative pr-2'>
        <Link href={'/'}>
          <button
            type='button'
            className='rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500'
          >
            Cancelar
          </button>
        </Link>

        <button
          type='submit'
          className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 '
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
