import logo from '../../imgs/imageBackground.png';
import Image from 'next/image';

export const ImageBackground = () => (
  <section className='w-full h-full flex justify-center items-center opacity-30 relative z-0 top-[29vh] lg:top-[0vh]'>
    <div className='w-full h-full z-0'>
      <Image className='w-full h-full relative z-0' src={logo} alt='imageMenu' />
    </div>
  </section>
);
