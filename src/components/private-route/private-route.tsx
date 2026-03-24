import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts/consts';
import { useSelector } from 'react-redux';
import { State } from '../../types/state';
import Spinner from '../spinner/spinner';

type PrivateRouteProps = {

  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useSelector((state: State) => state.app.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }
  if (authorizationStatus === AuthorizationStatus.NoAuth) {
    return <Navigate to={AppRoute.Login} />;
  }

  return children;
}

export default PrivateRoute;
