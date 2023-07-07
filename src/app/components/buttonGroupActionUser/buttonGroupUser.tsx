import { ButtonSocialMedia } from '../buttonSocialMedia/buttonSocialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faPlus, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export const ButtonGroupActionUser = () => {
  const userRegister = <FontAwesomeIcon icon={faUserPen} size='2xs' />;
  const addService = <FontAwesomeIcon icon={faPlus} size='2xs' />;
  const removeService = <FontAwesomeIcon icon={faTrash} size='2xs' />;
  const editService = <FontAwesomeIcon icon={faPenToSquare} size='2xs' />;

  return (
    <>
      <h1 className='flex flex-col items-center relative pb-2 text-[20px] font-bold top-[100px] font-titillium pt-20'>
        Oque você deseja fazer hoje? 😎
      </h1>

      <div className='flex flex-col items-center relative top-[120px] w-auto font-titillium z-10'>
        <Link href='/register' target='_blank'>
          <ButtonSocialMedia
            nameText={
              <div className='relative flex items-right space-x-4 lg:w-96 lg:mx-28 '>
                <p className='h-10 w-10 '>{userRegister}</p>
                <p className='h-20 w-10 text-[30px] lg:w-auto lg:h-10'>Cadastrar funcionario</p>
              </div>
            }
            className={'bg-green-500 text-white py-2 px-4 rounded  w-[32vh] h-28 py-px-[15vh] lg:w-[70vh] lg:h-16'}
          />
        </Link>
      </div>
      <div className='flex flex-col items-center relative top-[140px] w-auto font-titillium z-10'>
        <Link href='mailto:contatoEmailAqui@email.com' target='_blank'>
          <ButtonSocialMedia
            nameText={
              <div className='relative  flex items-center space-x-4  lg:w-96 lg:mx-28'>
                <p className='h-10 w-10'>{addService}</p>
                <p className='h-20 w-10 text-[30px] lg:w-auto lg:h-10'>Adicionar serviços</p>
              </div>
            }
            className={'bg-yellow-600 text-white py-2 px-4 rounded   w-[32vh] h-16 py-px-[15vh] lg:w-[70vh] '}
          />
        </Link>
      </div>
      <div className='flex flex-col items-center relative top-[160px] w-auto font-titillium z-10'>
        <Link href='' target='_blank'>
          <ButtonSocialMedia
            nameText={
              <div className='relative  flex items-center space-x-4  lg:w-96 lg:mx-28'>
                <p className='h-10 w-10'>{removeService}</p>
                <p className='h-20 w-10 text-[30px] lg:w-auto lg:h-10'>Remover serviços</p>
              </div>
            }
            className={'bg-red-600 text-white py-2 px-4 rounded    w-[32vh] h-16 py-px-[15vh] lg:w-[70vh]'}
          />
        </Link>
      </div>
      <div className='flex flex-col items-center relative top-[180px] w-auto font-titillium z-10'>
        <Link href='' target='_blank'>
          <ButtonSocialMedia
            nameText={
              <div className='relative  flex items-center space-x-4  lg:w-96 lg:mx-28'>
                <p className='h-10 w-10'>{editService}</p>
                <p className='h-20 w-10 text-[30px] lg:w-auto lg:h-10'>Editar serviços</p>
              </div>
            }
            className={'bg-blue-700 text-white py-2 px-4 rounded    w-[32vh] h-16 py-px-[15vh] lg:w-[70vh]'}
          />
        </Link>
      </div>
    </>
  );
};
