import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/app/app';
import mockOffers from './mock/mock-offers';
import { Setting } from './consts/consts';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        cardsCount={Setting.cardsCount}
        offers={mockOffers}
      />
    </Provider>

  </React.StrictMode>
);
