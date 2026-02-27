import LocationsList from './locations-list';
import { Offer } from '../../types';
import { DEFAULT_TYPE } from '../../consts/consts';

type CityProps = {
  cities: Offer[];
}

function NavTabs({ cities }: CityProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <LocationsList cities={cities} activeName={DEFAULT_TYPE} />
      </section>
    </div>
  );
}

export default NavTabs;
