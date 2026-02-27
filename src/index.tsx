import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';
import mockOffers from './mock/mock-offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offer={mockOffers}
    />
  </React.StrictMode>
);
