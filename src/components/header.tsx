import Logo from './logo/logo';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../types/state';
import { State } from '../types/state';
import { AuthorizationStatus, AppRoute } from '../consts/consts';
import { logoutAction } from '../store/api-action';


type HeaderProps = {
  showNav?: boolean;
};

function Header({ showNav = true }: HeaderProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const authorizationStatus = useSelector((state: State) => state.app.authorizationStatus);

  const user = useSelector((state: State) => state.app.user);

  const isLoggedIn: boolean = authorizationStatus === AuthorizationStatus.Auth;

  const authBlock = isLoggedIn ? (
    <>
      <span className="header__user-name user__name">{user?.email ?? ''}</span>
      <span className="header__favorite-count">3</span>
    </>
  ) : (
    <span className="header__login">Sign in</span>
  );

  const signOutItem = isLoggedIn ? (
    <li className="header__nav-item">
      <Link
        className="header__nav-link"
        to="#"
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(logoutAction());
        }}
      >
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  ) : null;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          {showNav && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={isLoggedIn ? AppRoute.Favorites : AppRoute.Login}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    {authBlock}
                  </Link>
                </li>
                {signOutItem}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
