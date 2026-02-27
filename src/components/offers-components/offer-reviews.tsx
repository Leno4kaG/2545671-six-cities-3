import { mockComments } from '../../mock/mock-comments';
import ReviewsItem from './reviews-item';
import ReviewsForm from './reviews-form';

function OfferReviews() {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        {mockComments.map((review) => (
          <ReviewsItem
            key={review.id}
            date={review.date}
            user={review.user}
            comment={review.comment}
            rating={review.rating}
          />))}
      </ul>
      <ReviewsForm />
    </section>
  );
}

export default OfferReviews;
