import { ImageBackground } from '../components/backgroundComponent/backgroundComponent';
import LoginForm from '../components/loginForm/loginForm';

export default function Home() {
  return (
    <div className='Home'>
      <LoginForm />
      <ImageBackground />
    </div>
  );
}
