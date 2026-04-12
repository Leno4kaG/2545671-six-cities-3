import { Review } from '../../types/review';
import { mockComments } from '../../mock/mock-comments';
import { reviewsReducer, clearReviews } from './reviews-slice';
import { fetchReviewsByOfferId, postReviewAction } from '../api-action/api-action';

type ReviewsState = {
  reviews: Review[];
  isLoading: boolean;
  isPosting: boolean;
  postError: string | null;
}

const initialState: ReviewsState = {
  reviews: [],
  isLoading: false,
  isPosting: false,
  postError: null,
};

describe('Review Slice', () => {
  it('should have correct initial state (explicit)', () => {
    const actual = reviewsReducer(undefined, { type: '' });
    expect(actual).toEqual(initialState);
  });
  it('should clear fields correctly on  clearReviews', () => {
    const update = {
      reviews: mockComments,
      isLoading: true,
      isPosting: true,
      postError: 'Some PostError',
    };

    const next = reviewsReducer(update, clearReviews());
    expect(next.reviews).toEqual([]);
    expect(next.isPosting).toBe(false);
    expect(next.isLoading).toBe(false);
    expect(next.postError).toBeNull();
  });
  it('should set isLoading = true on fetchReviewsByOfferId.pending', () => {
    const next = reviewsReducer(initialState, fetchReviewsByOfferId.pending('', ''));
    expect(next.isLoading).toBe(true);
  });
  it('should set isLoading = false and update review when fetchReviewsByOfferId.fulfilled', () => {
    const state = { ...initialState, isLoading: true };
    const payload = mockComments;
    const next = reviewsReducer(state, fetchReviewsByOfferId.fulfilled(payload, '', ''));
    expect(next.isLoading).toBe(false);
    expect(next.reviews).toEqual(payload);
  });
  it('sets isLoading to false and reviews = [] on fetchReviewsByOfferId.rejected', () => {
    const state = { ...initialState, isLoading: true, reviews: mockComments };
    const next = reviewsReducer(state, fetchReviewsByOfferId.rejected(null, '', ''));
    expect(next.isLoading).toBe(false);
    expect(next.reviews).toEqual([]);
  });
  it('should set isPosting = true on postReviewAction.pending', () => {
    const next = reviewsReducer(initialState, postReviewAction.pending('', { id: '1', rating: 5, comment: 'ok' }));
    expect(next.isPosting).toBe(true);
    expect(next.postError).toBeNull();
  });

  it('should add review, set isPosting = false and clear postError on postReviewAction.fulfilled', () => {
    const existing: Review[] = mockComments.slice();
    const state = { ...initialState, reviews: existing, isPosting: true, postError: 'old' };

    const newReview: Review = {
      id: 'new-id',
      user: { name: 'User', avatarUrl: 'https://url-to-image/image23.png', isPro: true },
      rating: 5,
      comment: 'Great!',
      date: '2024-01-01T00:00:00.000Z'
    };

    const next = reviewsReducer(
      state,
      postReviewAction.fulfilled(newReview, '', { id: '1', rating: 5, comment: 'Great!' })
    );

    expect(next.isPosting).toBe(false);
    expect(next.postError).toBeNull();
    expect(next.reviews[0]).toEqual(newReview);
    expect(next.reviews.slice(1)).toEqual(existing);
  });

  it('should set isPosting = false and set postError on postReviewAction.rejected', () => {
    const state = { ...initialState, reviews: mockComments, isPosting: true, postError: null };

    const error = new Error('Network Error');
    const arg = { id: '1', rating: 5, comment: 'Great!' };

    const next = reviewsReducer(
      state,
      postReviewAction.rejected(error, '', arg)
    );

    expect(next.isPosting).toBe(false);
    expect(next.postError).toBe('Network Error');
  });
});
