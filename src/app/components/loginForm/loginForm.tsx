'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { FormEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [exibirParagrafo, setExibirParagrafo] = useState(false);
  const router = useRouter();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const inputValue = (e: any) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { data: session } = useSession({
    required: false,
  });

  console.log(session);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event: any) => {
    event.preventDefault();
    const result = await signIn('credentials', {
      ...data,
      redirect: false,
      callbackUrl: '/profile',
    });

    if (result?.error) {
      return setExibirParagrafo(true);
    } else {
      router.push('/profile');
    }
  };

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Logue na sua conta.
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          {exibirParagrafo && (
            <p className='text-white font-titillium font-bold bg-red-500 text-center rounded transition-opacity animate-pulse py-2'>
              Email ou senha errada, tente novamente.
            </p>
          )}
          <form className='space-y-6' action='#' method='POST' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='email' className='block text-sm font-titillium font-bold leading-6 text-gray-900 pt-2'>
                Email
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  onChange={inputValue}
                  autoComplete='email'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-2 font-titillium placeholder:text-gray-400 placeholder:p-2 '
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='block text-sm font-titillium font-bold leading-6 text-gray-900'>
                  Senha
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  onChange={inputValue}
                  autoComplete='current-password'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-2 font-titillium placeholder:text-gray-400 placeholder:p-2 '
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-titillium font-bold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
