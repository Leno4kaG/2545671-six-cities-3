import { PLACES_SORTING } from '../../consts/consts';

function SortList() {
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {PLACES_SORTING.map((place) => (
        <li className="places__option places__option--active" tabIndex={0} key={place}>{place}
        </li>))}
    </ul>
  );
}

export default SortList;
