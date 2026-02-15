import { PLACES_SORTING } from '../../consts/consts';

type PlaceSort = {
  place: string;
}

function SortItem({ place }: PlaceSort): JSX.Element {
  return (
    <li className="places__option places__option--active" tabIndex={0}>{place} </li>
  );
}

function SortList() {
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {PLACES_SORTING.map((place) => (<SortItem key={place} place={place} />))}
    </ul>
  );
}

function Sort() {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortList />
    </form>
  );
}

export default Sort;
