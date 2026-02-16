import PlaceCard from '../place-card';

import mockOffers from '../../mock/mock-offers';

function NearPlaces() {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {mockOffers.map((card) => (
          <PlaceCard
            key={card.id}
            data={card}
            variant='near-places'
          />))}
      </div>
    </section>
  );
}

export default NearPlaces;
