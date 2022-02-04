import * as api from '../../API/userApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk('auth/register', async credentials => {
  const responce = await api.registerApi(credentials);
  console.log(responce);
  return responce;
});

export const login = createAsyncThunk('auth/login', async credentials => {
  const responce = await api.login(credentials);
  return responce;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  const responce = await api.logOut();
  return responce;
});
