import { Offer } from '../../types';

import { Link } from 'react-router-dom';

type CityProps = {
  cities: Offer[];
  activeName: string;
}

function LocationsList({ cities, activeName }: CityProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((offer) => (
        <li className="locations__item" key={offer.city.name}>
          <Link
            className={`locations__item-link tabs__item
            ${activeName === offer.city.name ? 'tabs__item--active' : ''} `}
            to='#'
          >
            <span>{offer.city.name}</span>
          </Link>
        </li>))}
    </ul >
  );
}

export default LocationsList;
