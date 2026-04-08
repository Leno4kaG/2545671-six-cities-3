import { Navigate } from 'react-router-dom';

import Spinner from '../spinner/spinner';
import { useAppSelector } from '../../hooks/hooks';
import { AppRoute, AuthorizationStatus } from '../../consts/consts';

type PrivateRouteProps = {

  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.userReducer.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }
  if (authorizationStatus === AuthorizationStatus.NoAuth) {
    return <Navigate to={AppRoute.Login} />;
  }

  return children;
}

export default PrivateRoute;
