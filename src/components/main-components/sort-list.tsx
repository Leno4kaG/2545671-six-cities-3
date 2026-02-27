import { PlacesSorting } from '../../consts/consts';

function SortList() {
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {Object.values(PlacesSorting).map((place) => (
        <li className="places__option places__option--active" tabIndex={0} key={place}> {place}
        </li>))}
    </ul>
  );
}

export default SortList;
