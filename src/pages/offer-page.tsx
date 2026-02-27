import Header from '../components/header';
import OfferGallery from '../components/offers-components/offer-gallery';
import OfferDetails from '../components/offers-components/offer-details';
import OfferHost from '../components/offers-components/offer-host';
import OfferReviews from '../components/offers-components/offer-reviews';
import NearPlaces from '../components/offers-components/near-places';
import InsideAmenitiesItem from '../components/offers-components/inside-amenities-item';
import Error404 from './error/error-404';

import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { Offer } from '../types';

type OfferProps = {
  offers: Offer[];
}

function OfferPage({ offers }: OfferProps) {

  const { id } = useParams<{ id: string }>();
  const currentOffer: Offer | undefined = offers.find((offer) => offer.id === id);
  if (!currentOffer) {
    return <Error404 />;
  }

  return (
    <div className="page">
      <Helmet><title>6 cities: offer</title></Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <OfferGallery images={currentOffer.images} />
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferDetails
                data={currentOffer}
              />
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <InsideAmenitiesItem
                  services={currentOffer.goods}
                />
              </div>
              <OfferHost
                host={currentOffer.host}
                description={currentOffer.description}
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

export default OfferPage;
