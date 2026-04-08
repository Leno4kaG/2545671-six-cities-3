import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import './error-message.css';

function ErrorMessageComponent(): JSX.Element | null {
  const error = useAppSelector((state) => state.offerReducer.error ?? null);
  return error ? <div className="error-message">{error}</div> : null;
}

export const ErrorMessage = React.memo(ErrorMessageComponent);
