import logo from '../../imgs/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export const Menu = () => {
  return (
    <section className='font-titillium text-black flex bg-slate-50 bg-opacity-30 p-2 '>
      <Image className='w-20 h-full  relative' src={logo} alt='imageMenu' />
      <div className=' w-full flex items-center justify-end'>
        <Link href='/'>
          <p className='text-[#767676] font-titillium font-bold text-xl '>Inicio</p>
        </Link>

        <Link href='/onlyContacts'>
          <p className='text-[#767676] font-titillium font-bold text-xl pl-4 pr-5'>Contato</p>
        </Link>
      </div>
    </section>
  );
};
