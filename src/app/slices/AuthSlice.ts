import { createSlice } from '@reduxjs/toolkit';

interface AuthInitialState {
  userInfo: {
    uid: string;
    email: string;
    name: string;
  } | undefined;
  isDarkTheme: boolean; // Changed 'false' to 'boolean' for type consistency
}

const initialState: AuthInitialState = {
  userInfo: undefined,
  isDarkTheme: false, // Added a colon ':' for type consistency
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.isDarkTheme = action.payload.isDarkTheme; 
    },
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUser, changeTheme } = authSlice.actions; // Added changeTheme to exported actions

export default authSlice.reducer;
 