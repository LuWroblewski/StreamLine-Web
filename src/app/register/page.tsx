import { ImageBackground } from '../components/backgroundComponent/backgroundComponent';
import RegisterForm from '../components/registerForm/RegisterForm';

export default function Home() {
  return (
    <div className='Home'>
      <RegisterForm />
      <ImageBackground />
    </div>
  );
}
