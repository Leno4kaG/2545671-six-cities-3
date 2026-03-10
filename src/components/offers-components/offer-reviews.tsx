import ReviewsItem from './reviews-item';
import ReviewsForm from './reviews-form';

import { Review } from '../../types/review';

type OfferReviewsProps = {
  reviews: Review[];
}

function OfferReviews({ reviews }: OfferReviewsProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">1</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewsItem
            key={review.id}
            data={review}
          />))}
      </ul>
      <ReviewsForm />
    </section>
  );
}

export default OfferReviews;
