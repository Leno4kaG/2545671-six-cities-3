import Header from '../components/header';
import OfferGallery from '../components/offers-components/offer-gallery';
import OfferDetails from '../components/offers-components/offer-details';
import OfferHost from '../components/offers-components/offer-host';
import OfferReviews from '../components/offers-components/offer-reviews';
import NearPlaces from '../components/offers-components/near-places';
import InsideItem from '../components/offers-components/inside-item';

import mockOffers from '../mock/mock-offers';

function Offers() {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer" data-id={mockOffers[0].id}>
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {mockOffers.map((offer) => (<OfferGallery key={offer.id} images={offer.images} />))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferDetails
                title={mockOffers[0].title}
                isPremium={mockOffers[0].isPremium}
                rating={mockOffers[0].rating}
                type={mockOffers[0].type}
                bedrooms={mockOffers[0].bedrooms}
                maxAdults={mockOffers[0].maxAdults}
                price={mockOffers[0].price}
              />
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <InsideItem
                  goods={mockOffers[0].goods}
                />
              </div>
              <OfferHost
                name={mockOffers[0].host.name}
                avatarUrl={mockOffers[0].host.avatarUrl}
                isPro={mockOffers[0].host.isPro}
              />
              <OfferReviews />
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <NearPlaces />
        </div>
      </main>
    </div>
  );
}

export default Offers;
