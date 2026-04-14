import { PlacesSorting } from '../../consts/consts';

type SortListProps = {
  selected: PlacesSorting;
  onChange: (value: PlacesSorting) => void;
  isOpen?: boolean;
}

function SortList({ selected, onChange, isOpen = false }: SortListProps): JSX.Element {
  const openedClass = isOpen ? ' places__options--opened' : '';
  return (
    <ul className={`places__options places__options--custom${openedClass}`} >
      {
        Object.values(PlacesSorting).map((place) => {
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
        })
      }
    </ ul>
  );
}

export default SortList;
