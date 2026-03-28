import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../consts/consts';
import { AuthInfo } from '../types/auth-info';

type UserState = {
  authorizationStatus: AuthorizationStatus;
  user: AuthInfo | null;
}

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthorizationStatus(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = action.payload;
    },
    setUser(state, action: PayloadAction<AuthInfo | null>) {
      state.user = action.payload;
    },
  }
});

export const { setAuthorizationStatus, setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
