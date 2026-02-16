import { Offer } from '../types';
import { getRating } from '../utils/utils';

const configCard = {
  cities: {
    imageHeight: 200,
    imageWidth: 260,
  },
  favorites: {
    imageHeight: 110,
    imageWidth: 150
  },
  'near-places': {
    imageHeight: 200,
    imageWidth: 260,
  }
};

type PlaceCard = {
  variant: 'cities' | 'favorites' | 'near-places';
  data: Offer;
}

function PlaceCard({ data, variant }: PlaceCard): JSX.Element {
  const newRating = getRating(data.rating);

  return (
    <article className={`${variant}__card place-card`} data-id={data.id}>
      {data.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${variant}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={data.previewImage} width={configCard[variant].imageWidth} height={configCard[variant].imageHeight} alt={data.title} />
        </a>
      </div>
      <div className={`place-card__info ${variant === 'favorites' ? 'favorites-card__info' : ''}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{data.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${data.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div >
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: newRating }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{data.title}</a>
        </h2>
        <p className="place-card__type">{data.type}</p>
      </div >
    </article >
  );
}

export default PlaceCard;
