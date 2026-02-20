import Header from '../components/header';
import Footer from '../components/footer';
import PlaceCard from '../components/place-card';
import mockOffers from '../mock/mock-offers';

import { Helmet } from 'react-helmet-async';

function Favorites() {
  return (
    <div className="page">
      <Helmet><title>6 cities: favorites</title></Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {mockOffers.map((card) => (
                    <PlaceCard
                      key={card.id}
                      data={card}
                      variant='favorites'
                    />))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
