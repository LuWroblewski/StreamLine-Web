import { ImageBackground } from './components/backgroundComponent/backgroundComponent';

export default function Home() {
  return (
    <div>
      <div className='w-auto text-right box-border p-4 px-16 text-[#767676] lg:px-32'>
        <h1 className='top-16 text-2xl font-titillium font-bold relative lg:text-4xl'>Nome Aqui</h1>
        <p className='top-16 font-titillium font-medium relative lg:pl-96 '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Morbi blandit cursus risus at ultrices mi tempus. Enim lobortis scelerisque fermentum dui
          faucibus. Metus dictum at tempor commodo
        </p>
      </div>
      <ImageBackground />
    </div>
  );
}
