import { CITIES } from '../../consts/consts';

import { Link } from 'react-router-dom';

type CityProps = {
  activeName: string;
}

function LocationsList({ activeName }: CityProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li className="locations__item" key={city.name}>
          <Link
            className={`locations__item-link tabs__item
            ${activeName === city.name ? 'tabs__item--active' : ''} `}
            to='#'
          >
            <span>{city.name}</span>
          </Link>
        </li>))}
    </ul >
  );
}

export default LocationsList;
