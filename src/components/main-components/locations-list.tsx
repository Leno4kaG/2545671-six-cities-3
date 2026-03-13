import { useDispatch, useSelector } from 'react-redux';
import { CITIES } from '../../consts/consts';
import { City } from '../../types/offer';
import { State, AppDispatch } from '../../types/state';
import { changeCity } from '../../store/action';


import { Link } from 'react-router-dom';

type LocationsListProps = {
  onClick?: (city: City) => void;
}

function LocationsList({ onClick }: LocationsListProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const activeCityName = useSelector((state: State) => state.city.name);
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => {
        const isActiveTab = activeCityName === city.name;
        return (
          <li className="locations__item" key={city.name}>
            <Link
              to="#"
              className={`locations__item-link tabs__item ${isActiveTab ? 'tabs__item--active' : ''}`}
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(changeCity(city));
                onClick?.(city);
              }}
            >
              <span>{city.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default LocationsList;
