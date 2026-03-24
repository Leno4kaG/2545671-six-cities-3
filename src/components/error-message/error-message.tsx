import { useSelector } from 'react-redux';
import { State } from '../../types/state';
import './error-message.css';

export function ErrorMessage(): JSX.Element | null {
  const error = useSelector((state: State) => state.app.error);
  return (error) ?
    <div className="error-message">
      {error}
    </div>
    : null;
}
