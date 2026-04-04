import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import FavoritesPage from '../../pages/favorites-page';
import MainPage from '../../pages/main-page';
import OfferPage from '../../pages/offer-page';
import Error404 from '../../pages/error/error-404';
import LoginPage from '../../pages/login-page';
import PrivateRoute from '../private-route/private-route';

import { AppRoute } from '../../consts/consts';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../types/state';
import { useEffect } from 'react';
import { checkAuthAction } from '../../store/api-action';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute >
                <FavoritesPage />
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
