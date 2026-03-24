import { store } from '../store';
import { setError } from '../store/offers-slice';
import { clearErrorAction } from '../store/api-action';

export function processErrorHandle(message: string): void {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
}
