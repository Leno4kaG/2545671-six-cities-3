import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import FavoritesPage from '../../pages/favorites-page';
import MainPage from '../../pages/main-page';
import OfferPage from '../../pages/offer-page';
import Error404 from '../../pages/error/error-404';
import LoginPage from '../../pages/login-page';
import PrivateRoute from '../private-route/private-route';

import { AppRoute, AuthorizationStatus } from '../../consts/consts';
import { Offer } from '../../types/offer';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../types/state';
import { useEffect } from 'react';
import { setOffers } from '../../store/action';
import mockOffers from '../../mock/mock-offers';

type AppProps = {
  offers: Offer[];
  cardsCount: number;
}

function App({ offers, cardsCount }: AppProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setOffers(mockOffers));
  }, [dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage cardsCount={cardsCount} />}
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesPage offers={offers} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
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
