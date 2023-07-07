import { ImageBackground } from '../components/backgroundComponent/backgroundComponent';
import { ButtonGroupActionUser } from '../components/buttonGroupActionUser/buttonGroupUser';
import { User } from '../components/user/User';

export default function Home() {
  return (
    <div className='Home'>
      <User />
      <ButtonGroupActionUser />
      <ImageBackground />
    </div>
  );
}
