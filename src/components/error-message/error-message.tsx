import { useAppSelector } from '../../components/hooks';

function ErrorMessage(): JSX.Element | '' {
  const error = useAppSelector((state) => state.error);

  return (error) && <div className='error-message'>{error}</div>;

}

export default ErrorMessage;
