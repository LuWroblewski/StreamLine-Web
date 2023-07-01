import logo from '../../imgs/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export const Menu = () => {
  return (
    <section className='font-titillium text-black flex bg-slate-50 bg-opacity-30 p-2 '>
      <Image className='w-20 h-full  relative' src={logo} alt='imageMenu' />
      <div className=' w-full flex items-center justify-end'>
        <Link href='/'>
          <p className='text-[#767676] font-titillium font-bold text-lg lg:text-xl'>Inicio</p>
        </Link>

        <Link href='/gallery'>
          <p className='text-[#767676] font-titillium font-bold text-lg pl-4 lg:text-xl'>Galeria</p>
        </Link>

        <Link href='/onlyContacts'>
          <p className='text-[#767676] font-titillium font-bold text-lg pl-4 pr-5 lg:text-xl'>Contato</p>
        </Link>
      </div>
    </section>
  );
};
