import LocationsList from './locations-list';

import { DEFAULT_TYPE } from '../../consts/consts';

function NavTabs() {
  return (
    <div className="tabs">
      <section className="locations container">
        <LocationsList activeName={DEFAULT_TYPE} />
      </section>
    </div>
  );
}

export default NavTabs;
