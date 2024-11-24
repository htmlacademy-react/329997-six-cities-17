import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  placesToStay: number;
}

function App({placesToStay}: AppScreenProps): JSX.Element {
  return (
    <MainScreen placesToStay={placesToStay} />
  );
}

export default App;
