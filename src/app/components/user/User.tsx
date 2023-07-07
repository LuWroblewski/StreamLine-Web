'use client';

import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export const User = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login');
    },
  });
  console.log(session);

  return (
    <section className='h-10 flex flex-col items-center pt-4 px-4 lg:px-0'>
      <div className='flex justify-center items-start'>
        <div className='p-8 rounded-md shadow-lg border border-blue-500'>
          <p className='text-2xl text-gray-900 font-bold font-titillium'>Bem vindo, {session?.user?.name}</p>
        </div>
      </div>
      <div className='p-2 rounded-md shadow-lg  bg-red-500 w-72' onClick={() => signOut()}>
        <button className='text-2xl text-white font-bold font-titillium w-full h-full text-left'>Sair</button>
      </div>
    </section>
  );
};
