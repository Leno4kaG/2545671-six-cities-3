import Header from '../components/header';
import NavTabs from '../components/main-components/nav-tabs';
import Sort from '../components/main-components/sort';
import OfferList from '../components/main-components/offer-list';
import Map from '../components/map/map';

import { Helmet } from 'react-helmet-async';
import { useState, useMemo } from 'react';

import { Offer, TCity } from '../types/offer';
import { getRandomCards } from '../utils/utils';


type MainProps = {
  offers: Offer[];
  cardsCount: number;
};

function MainPage({ offers, cardsCount }: MainProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const activeCity: TCity | undefined = offers.find((offer) => offer.city.name === 'Amsterdam')?.city;

  const amsterdamOffers = useMemo(
    () => offers.filter((o) => o.city.name === 'Amsterdam'),
    [offers]
  );

  const cards = useMemo(
    () => getRandomCards(amsterdamOffers, cardsCount),
    [amsterdamOffers, cardsCount]
  );

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
              <b className="places__found">312 places to stay in Amsterdam</b>
              <Sort />
              <OfferList
                offers={cards}
                onActiveOfferChange={setActiveOfferId}
              />
            </section>
            <div className="cities__right-section">
              {activeCity &&
                (
                  <Map
                    offers={cards}
                    location={activeCity.location}
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
