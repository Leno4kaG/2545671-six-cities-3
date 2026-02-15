import { CITIES } from '../../consts/consts';
type CityProps = {
  city: string;
}

function LocationsItem({ city }: CityProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

function LocationsList() {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (<LocationsItem key={city} city={city} />))}
    </ul>
  );
}

function NavTabs() {
  return (
    <div className="tabs">
      <section className="locations container">
        <LocationsList />
      </section>
    </div>
  );
}

export default NavTabs;
