import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mockOffers } from './mocks/offers';
import { mockUser } from './mocks/user';
import { LOCATIONS } from './const';
import { mockNearestOffers } from './mocks/nearestOffers';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        userInfo={mockUser}
        offers={mockOffers}
        nearestOffers={mockNearestOffers}
        locations={LOCATIONS}
      />
    </Provider>
  </React.StrictMode>,
);
