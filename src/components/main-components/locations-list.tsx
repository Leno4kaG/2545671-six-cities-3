import { Link } from 'react-router-dom';
import React from 'react';

import { CITIES } from '../../consts/consts';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCity } from '../../store/offers-slice/offers-slice';

function LocationsListComponent(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCityName = useAppSelector((state) => state.offerReducer.city.name);

  return (
    <ul className="locations__list tabs__list">

      {CITIES.map((city) => {
        const activeClass = activeCityName === city.name ? ' tabs__item--active' : '';

        return (
          <li className="locations__item" key={city.name}>
            <Link
              to="#"
              className={`locations__item-link tabs__item ${activeClass}`}
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
    </ul >
  );
}

export const LocationsList = React.memo(LocationsListComponent);
