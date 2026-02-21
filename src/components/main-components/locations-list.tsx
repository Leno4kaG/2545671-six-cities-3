import { CITIES } from '../../consts/consts';

function LocationsList() {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li className="locations__item" key={city.name}>
          <a className="locations__item-link tabs__item" href="#">
            <span>{city.name}</span>
          </a>
        </li>))}
    </ul>
  );
}

export default LocationsList;
