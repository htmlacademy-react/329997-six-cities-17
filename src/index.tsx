import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mockOffers } from './mocks/offers';
import { mockUser } from './mocks/user';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      userInfo={mockUser}
      offers={mockOffers}
    />
  </React.StrictMode>,
);
