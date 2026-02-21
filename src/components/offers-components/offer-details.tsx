import { Offer } from '../../types';
import { getRating } from '../../utils/utils';

type OfferDetails = {
  data: Offer;
};

function OfferDetails({ data }: OfferDetails) {
  const { title, isPremium, rating, type, bedrooms, maxAdults, price } = data;

  const newRating = getRating(rating);

  return (
    <>
      {isPremium && (
        <div className="offer__mark">
          <span>Premium</span>
        </div>)}
      <div className="offer__name-wrapper">
        <h1 className="offer__name">
          {title}
        </h1>
        <button className="offer__bookmark-button button" type="button">
          <svg className="offer__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{ width: newRating }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{rating}</span>
      </div>
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">
          {type}
        </li>
        <li className="offer__feature offer__feature--bedrooms">
          {bedrooms}
        </li>
        <li className="offer__feature offer__feature--adults">
          {maxAdults}
        </li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">&euro;{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
    </>
  );
}

export default OfferDetails;
