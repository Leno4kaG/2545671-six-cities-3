import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { CITIES } from '../../consts/consts';
import { State, AppDispatch } from '../../types/state';
import { setCity } from '../../store/offers-slice';

function LocationsList(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const activeCityName = useSelector((state: State) => state.offers.city.name);
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
                dispatch(setCity(city));
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
