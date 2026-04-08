import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { Offer } from '../types/offer';
import { AuthorizationStatus, AppRoute } from '../consts/consts';
import { postFavoriteAction } from '../store/api-action';

const configButton = {
  small: {
    imageWidth: 18,
    imageHeight: 19,
  },
  large: {
    imageWidth: 31,
    imageHeight: 33,
  }
};

type BookmarksButtonProps = {
  offer: Offer;
  className: string;
  iconClassName: string;
  variant: 'small' | 'large';
}

function BookmarksButtonComponent({ offer, className, iconClassName, variant }:
  BookmarksButtonProps): JSX.Element {
  const size = configButton[variant];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector((state) => state.userReducer.authorizationStatus);

  const handleButtonClick = () => {
    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }
    const status = offer.isFavorite ? 0 : 1;
    dispatch(postFavoriteAction({ offerId: offer.id, status }));
  };

  return (
    <button className={className} type="button" onClick={handleButtonClick}>
      <svg
        className={iconClassName}
        width={size.imageWidth}
        height={size.imageHeight}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export const BookmarksButton = React.memo(BookmarksButtonComponent);
