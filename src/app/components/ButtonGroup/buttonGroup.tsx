import { ButtonSocialMedia } from '../buttonSocialMedia/buttonSocialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export const ButtonGroup = () => {
  const WhatsAppIcon = <FontAwesomeIcon icon={faWhatsapp} size='2xs' />;
  const gmailIcon = <FontAwesomeIcon icon={faEnvelope} size='2xs' />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size='2xs' />;
  const facebookIcon = <FontAwesomeIcon icon={faFacebook} size='2xs' />;

  return (
    <>
      <h1 className='flex flex-col items-center relative pb-2 text-[50px] font-bold top-[42px] font-titillium'>
        Fale comigo!
      </h1>

      <div className='flex flex-col items-center relative top-[40px] w-auto font-titillium z-10'>
        <ButtonSocialMedia
          href={''}
          nameText={
            <div className='relative flex items-center space-x-4 lg:w-96 lg:mx-44'>
              <p className='h-10 w-10 '>{WhatsAppIcon}</p>
              <p className='h-10 w-10 text-[30px]'>WhatsApp</p>
            </div>
          }
          className={'bg-green-500 text-white py-2 px-4 rounded   w-[32vh] h-16 py-px-[15vh] lg:w-[70vh]'}
        />
      </div>
      <div className='flex flex-col items-center relative top-[60px] w-auto font-titillium z-10'>
        <ButtonSocialMedia
          href={`mailto:contatoEmailAqui@email.com`}
          nameText={
            <div className='relative  flex items-center space-x-4  lg:w-96 lg:mx-44'>
              <p className='h-10 w-10'>{gmailIcon}</p>
              <p className='h-10 w-15 text-[30px]'>E-mail</p>
            </div>
          }
          className={'bg-red-600 text-white py-2 px-4 rounded   w-[32vh] h-16 py-px-[15vh] lg:w-[70vh]'}
        />
      </div>
      <div className='flex flex-col items-center relative top-[80px] w-auto font-titillium z-10'>
        <ButtonSocialMedia
          href={''}
          nameText={
            <div className='relative  flex items-center space-x-4 lg:w-96 lg:mx-44'>
              <p className='h-10 w-10'>{linkedinIcon}</p>
              <p className='h-10 w-10 text-[30px]'>Linkedin</p>
            </div>
          }
          className={'bg-blue-500 text-white py-2 px-4 rounded    w-[32vh] h-16 py-px-[15vh] lg:w-[70vh]'}
        />
      </div>
      <div className='flex flex-col items-center relative top-[100px] w-auto font-titillium z-10'>
        <ButtonSocialMedia
          href={''}
          nameText={
            <div className='relative  flex items-center space-x-4 lg:w-96 lg:mx-44'>
              <p className='h-10 w-10'>{facebookIcon}</p>
              <p className='h-10 w-10 text-[30px]'>Facebook</p>
            </div>
          }
          className={'bg-blue-700 text-white py-2 px-4 rounded    w-[32vh] h-16 py-px-[15vh] lg:w-[70vh]'}
        />
      </div>
      <div></div>
    </>
  );
};
