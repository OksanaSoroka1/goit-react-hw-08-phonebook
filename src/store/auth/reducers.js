import { createSlice } from '@reduxjs/toolkit';
import * as operations from './operations';

const initialState = {
  userData: {
    name: '',
    email: '',
  },
  token: null,
  isLogin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(operations.register.fulfilled, (state, action) => {
      state.userData = action.payload.user;
      state.isLogin = true;
      state.token = action.payload.token;
    });
    builder.addCase(operations.login.fulfilled, (state, action) => {
      state.userData = action.payload.user;
      state.isLogin = true;
      state.token = action.payload.token;
    });
    builder.addCase(operations.logout.fulfilled, (state, action) => {
      state.userData = { name: '', email: '' };
      state.isLogin = false;
      state.token = null;
    });
    builder.addCase(operations.fetchCurrentUser.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.isLogin = true;
    });
  },
});

export default userSlice.reducer;
