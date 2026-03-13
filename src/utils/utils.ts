import { Review } from '../types/review';
import { MAX_RATING, PERCENT_PER_STAR } from '../consts/consts';

export function getRandomInteger(minValue: number, maxValue: number): number {
  const lower = Math.ceil(Math.min(minValue, maxValue));
  const upper = Math.floor(Math.max(minValue, maxValue));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

export function formatDateForTime(iso: string, locale: string) {
  const date = new Date(iso);

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const dateTime = `${year}-${month}-${day}`;

  const monthName = date.toLocaleString(locale, { month: 'long', timeZone: 'UTC' });
  const yearText = date.getUTCFullYear();
  const text = `${monthName} ${yearText}`;

  return { dateTime, text };
}

export function sortReviewsByDate(reviews: Review[]): Review[] {
  return reviews.slice().sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime())
  );
}

export function getRating(rating: number): string {
  return `${Math.max(0, Math.min(MAX_RATING, Number(rating) || 0)) * PERCENT_PER_STAR}%`;
}

export function getRandomCards<T>(data: T[], count: number): T[] {
  return [...data].sort(() => Math.random() - 0.5).slice(0, count);
}

export function capitalizeFirst(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}
