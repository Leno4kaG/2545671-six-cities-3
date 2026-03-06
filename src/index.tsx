import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';
import mockOffers from './mock/mock-offers';
import { Setting } from './consts/consts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      cardsCount={Setting.cardsCount}
      offers={mockOffers}
    />
  </React.StrictMode>
);
