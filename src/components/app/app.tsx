import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Favorites from '../../pages/favorites';
import Main from '../../pages/main';
import OfferPage from '../../pages/offer-page';
import Error404 from '../../pages/error/error-404';
import Login from '../../pages/login';
import PrivateRoute from '../private-route/private-route';

import { AppRoute, AuthorizationStatus } from '../../consts/consts';
import { Offer } from '../../types';

type AppProps = {
  offer: Offer[];

}

function App({ offer }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main offers={offer} />}
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage offers={offer} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Favorites offers={offer} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={AppRoute.Error}
            element={<Error404 />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
