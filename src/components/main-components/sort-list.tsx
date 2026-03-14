import { PlacesSorting } from '../../consts/consts';

type SortListProps = {
  selected: PlacesSorting;
  onChange: (value: PlacesSorting) => void;
}

function SortList({ selected, onChange }: SortListProps): JSX.Element {
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {Object.values(PlacesSorting).map((place) => {
        const isActive = place === selected;
        return (
          <li
            className={`places__option ${isActive ? 'places__option--active'
              : ''}`}
            tabIndex={0}
            key={place}
            onClick={() => onChange(place)}
          >
            {place}
          </li>
        );
      })}
    </ul>
  );
}

export default SortList;
