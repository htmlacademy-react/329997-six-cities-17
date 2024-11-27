import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  placesToStay: number;
  emailAddress: string;
  favoriteCount: number;
}

function App({ placesToStay, emailAddress, favoriteCount }: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      placesToStay={placesToStay}
      emailAddress={emailAddress}
      favoriteCount={favoriteCount}
    />
  );
}

export default App;
