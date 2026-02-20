import Header from '../components/header';
import NavTabs from '../components/main-components/nav-tabs';
import Sort from '../components/main-components/sort';
import PlaceCard from '../components/place-card';

import { Helmet } from 'react-helmet-async';

import mockOffers from '../mock/mock-offers';

function Main() {
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
              <div className="cities__places-list places__list tabs__content">
                {mockOffers.map((card) => (
                  <PlaceCard
                    key={card.id}
                    data={card}
                    variant='cities'
                  />))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main >
    </div >
  );
}

export default Main;
