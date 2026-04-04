import Header from '../components/header';
import NavTabs from '../components/main-components/nav-tabs';
import Sort from '../components/main-components/sort';
import OfferList from '../components/main-components/offer-list';
import Map from '../components/map/map';
import Spinner from '../components/spinner/spinner';
import MainEmpty from '../components/main-components/main-empty';

import { Helmet } from 'react-helmet-async';
import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { State, AppDispatch } from '../types/state';

import { PlacesSorting, AuthorizationStatus } from '../consts/consts';
import { createFilteredAndSortedSelector } from '../selectors/offers-selectors';
import { fetchAllOffers } from '../store/api-action';


function MainPage(): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const selectedCity = useSelector((state: State) => state.offers.city);

  const [selectedSorting, setSelectedSorting] = useState<PlacesSorting>(PlacesSorting.Popular);

  const selector = useMemo(() => createFilteredAndSortedSelector(), []);
  const sortedOffers = useSelector((state: State) => selector(state, selectedSorting));

  const isOffersLoading = useSelector((state: State) => state.offers.isLoading);

  const authorizationStatus = useSelector((state: State) => state.user.authorizationStatus);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllOffers());
  }, [dispatch]);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }

  const isOffersAvailable = !isOffersLoading && sortedOffers.length > 0;

  return (
    <div className="page page--gray page--main">
      <Helmet><title>6 cities</title></Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <NavTabs />
        <div className="cities">
          {isOffersAvailable ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{sortedOffers.length} places to stay in {selectedCity.name}</b>
                <Sort selected={selectedSorting} onChange={setSelectedSorting} />
                {isOffersLoading ? (
                  <Spinner />
                ) : (
                  < OfferList
                    offers={sortedOffers}
                    onActiveOfferChange={setActiveOfferId}
                  />
                )}
              </section>
              <div className="cities__right-section">
                {selectedCity &&
                  (
                    <Map
                      offers={sortedOffers}
                      location={selectedCity.location}
                      className='cities__map map'
                      activeOfferId={activeOfferId}
                    />
                  )}
              </div>
            </div>
          ) : (
            <MainEmpty cityName={selectedCity.name} />
          )}
        </div>
      </main >
    </div >
  );
}

export default MainPage;
