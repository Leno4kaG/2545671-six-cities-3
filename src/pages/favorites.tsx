import Header from '../components/header';
import Footer from '../components/footer';
import PlaceCard from '../components/place-card';

import { Offer } from '../types';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

type FavoritesProps = {
  offers: Offer[];
};

function Favorites({ offers }: FavoritesProps): JSX.Element {

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
                    <Link className="locations__item-link" to="#">
                      <span>{offers[0].city.name} </span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map((card) => (
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
