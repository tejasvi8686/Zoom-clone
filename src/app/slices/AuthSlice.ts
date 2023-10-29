import { createSlice } from '@reduxjs/toolkit';

interface AuthInitialState {
  userInfo: {
    uid: string;
    email: string;
    name: string;
  } | undefined;
}

const initialState: AuthInitialState = {
  userInfo: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
