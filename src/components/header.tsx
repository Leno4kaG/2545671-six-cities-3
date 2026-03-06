import Logo from './logo/logo';
import { Link } from 'react-router-dom';

type HeaderProps = {
  isLoggedIn?: boolean;
  showNav?: boolean;
};

function Header({ isLoggedIn = true, showNav = true }: HeaderProps): JSX.Element {
  const authBlock = isLoggedIn ? (
    <>
      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
      <span className="header__favorite-count">3</span>
    </>
  ) : (
    <span className="header__login">Sign in</span>
  );

  const signOutItem = isLoggedIn ? (
    <li className="header__nav-item">
      <Link className="header__nav-link" to="#">
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
                  <Link className="header__nav-link header__nav-link--profile" to="#">
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
