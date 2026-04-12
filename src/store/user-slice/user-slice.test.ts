import { AuthorizationStatus } from '../../consts/consts';
import { AuthInfo } from '../../types/auth-info';
import { setAuthorizationStatus, setUser, userReducer } from './user-slice';

type UserState = {
  authorizationStatus: AuthorizationStatus;
  user: AuthInfo | null;
}

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

describe('User Slice', () => {
  it('returns the initial state when passed an empty action', () => {
    const actual = userReducer(undefined, { type: '' });
    expect(actual).toEqual(initialState);
  });

  it('handles setAuthorizationStatus action and updates authorizationStatus', () => {
    const newStatus = AuthorizationStatus.Auth;
    const next = userReducer(initialState, setAuthorizationStatus(newStatus));
    expect(next.authorizationStatus).toEqual(newStatus);
  });

  it('handles setUser action and updates user info', () => {
    const newUser: AuthInfo = {
      name: 'User',
      avatarUrl: 'https://url-to-image/image2.png',
      isPro: true,
      email: 'pop.test@test.com',
      token: 'Token'
    };

    const next = userReducer(initialState, setUser(newUser));
    expect(next.user).toEqual(newUser);
  });

  it('handles setUser with null and clears user info', () => {
    const stateWithUser = {
      ...initialState,
      user: {
        name: 'Existing',
        avatarUrl: 'https://url-to-image/existing.png',
        isPro: false,
        email: 'existing@test.com',
        token: 'old-token'
      }
    };
    const next = userReducer(stateWithUser, setUser(null));
    expect(next.user).toBeNull();
  });

  it('handles setAuthorizationStatus to NoAuth', () => {
    const prevState = { ...initialState, authorizationStatus: AuthorizationStatus.Auth };
    const next = userReducer(prevState, setAuthorizationStatus(AuthorizationStatus.NoAuth));
    expect(next.authorizationStatus).toEqual(AuthorizationStatus.NoAuth);
  });
});

