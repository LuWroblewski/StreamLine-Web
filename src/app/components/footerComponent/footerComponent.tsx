export const FooterComponent = () => {
  const email = 'contatoEmailAqui@email.com';

  return (
    <footer className='bg-gray-800 text-white py-4 w-full h-full min-h-[20vh]  relative top-[29vh] lg:top-[0vh] font-titillium'>
      <p className='text-center text-xl font-bold tracking-wider relative top-4	'>Seu Nome Aqui</p>
      <p className='text-center text-base font-bold relative top-7'>
        <a href={`mailto:${email}`} className='underline'>
          {email}
        </a>
      </p>
      <p className='text-center text-xs font-bold relative top-14'>
        Feito com ❤️ por:
        <a href='https://github.com/LuWroblewski' target='_blank'>
          LuWroblewski
        </a>
      </p>
    </footer>
  );
};
