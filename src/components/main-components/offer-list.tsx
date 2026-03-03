import PlaceCard from '../place-card';

import { useState } from 'react';

import { Offer } from '../../types';
import { Nullable } from 'vitest';

type OfferListProps = {
  offers: Offer[];
}

function OfferList({ offers }: OfferListProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Nullable<Offer>>(null);
  const handleHoverPlaceCard = (offer?: Offer) => setActiveOffer(offer || null);
  void activeOffer;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((card) => (
        <PlaceCard
          key={card.id}
          data={card}
          variant='cities'
          handleHoverPlaceCard={handleHoverPlaceCard}
        />))}
    </div>
  );
}

export default OfferList;
