const MAX_RATING = 5;
const PERCENT_PER_STAR = 20;

export function getRandomInteger(minValue: number, maxValue: number) {
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

export function getRating(rating: number) {
  return `${Math.max(0, Math.min(MAX_RATING, Number(rating) || 0)) * PERCENT_PER_STAR}%`;
}


