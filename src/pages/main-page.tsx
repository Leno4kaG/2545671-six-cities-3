import Header from '../components/header';
import NavTabs from '../components/main-components/nav-tabs';
import Sort from '../components/main-components/sort';
import OfferList from '../components/main-components/offer-list';
import Map from '../components/map/map';
import Spinner from '../components/spinner/spinner';

import { Helmet } from 'react-helmet-async';
import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { State } from '../types/state';

import { PlacesSorting, AuthorizationStatus } from '../consts/consts';
import { getBaseCards, sortOffers } from '../selectors/offers-selectors';


function MainPage(): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const selectedCity = useSelector((state: State) => state.app.city);

  const [selectedSorting, setSelectedSorting] = useState<PlacesSorting>(PlacesSorting.Popular);

  const offers = useSelector((state: State) => state.app.offers);

  const baseCards = useMemo(() => getBaseCards(offers, selectedCity.name), [offers, selectedCity.name]);

  const sortedCards = useMemo(() => sortOffers(baseCards, selectedSorting), [baseCards, selectedSorting]);

  const isOffersLoading = useSelector((state: State) => state.app.isLoading);

  const authorizationStatus = useSelector((state: State) => state.app.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet><title>6 cities</title></Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <NavTabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{baseCards.length} places to stay in {selectedCity.name}</b>
              <Sort selected={selectedSorting} onChange={setSelectedSorting} />
              {isOffersLoading ? (
                <Spinner />
              ) : (
                < OfferList
                  offers={sortedCards}
                  onActiveOfferChange={setActiveOfferId}
                />
              )}
            </section>
            <div className="cities__right-section">
              {selectedCity &&
                (
                  <Map
                    offers={sortedCards}
                    location={selectedCity.location}
                    className='cities__map map'
                    activeOfferId={activeOfferId}
                  />
                )}
            </div>
          </div>
        </div>
      </main >
    </div >
  );
}

export default MainPage;
