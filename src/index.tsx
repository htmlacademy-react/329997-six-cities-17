import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchOffersAction, fetchOffersFavoriteAction } from './store/api-action';
import { ToastContainer } from 'react-toastify';

store.dispatch(checkAuthAction())
  .then((response) => {
    if (response.meta.requestStatus === 'fulfilled') {
      store.dispatch(fetchOffersFavoriteAction());
    }
  });
store.dispatch(fetchOffersAction());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer position={'top-center'}/>
      <App />
    </Provider>
  </React.StrictMode>,
);
