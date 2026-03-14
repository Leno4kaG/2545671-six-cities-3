import Header from '../components/header';
import NavTabs from '../components/main-components/nav-tabs';
import Sort from '../components/main-components/sort';
import OfferList from '../components/main-components/offer-list';
import Map from '../components/map/map';

import { Helmet } from 'react-helmet-async';
import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { State } from '../types/state';

import { PlacesSorting } from '../consts/consts';


type MainProps = {
  cardsCount: number;
};

function MainPage({ cardsCount }: MainProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const selectedCity = useSelector((state: State) => state.city);
  const [selectedSorting, setSelectedSorting] = useState<PlacesSorting>(PlacesSorting.Popular);

  const offers = useSelector((state: State) => state.offers);

  const cityOffers = offers.filter((offer) => offer.city.name === selectedCity.name);

  const baseCards = useMemo(() => cityOffers.slice(0, cardsCount), [cityOffers, cardsCount]);

  const sortedCards = useMemo(() => {
    const cardsCopy = [...baseCards];
    switch (selectedSorting) {
      case PlacesSorting.PriceToLow:
        return cardsCopy.sort((a, b) => a.price - b.price);
      case PlacesSorting.PriceToHigh:
        return cardsCopy.sort((a, b) => b.price - a.price);
      case PlacesSorting.Top:
        return cardsCopy.sort((a, b) => b.rating - a.rating);
      case PlacesSorting.Popular:
      default:
        return cardsCopy;
    }
  }, [baseCards, selectedSorting]);

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
              <b className="places__found">{cityOffers.length} places to stay in {selectedCity.name}</b>
              <Sort selected={selectedSorting} onChange={setSelectedSorting} />
              <OfferList
                offers={sortedCards}
                onActiveOfferChange={setActiveOfferId}
              />
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
