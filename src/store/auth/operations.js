import * as api from '../../API/userApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const responce = await api.registerApi(credentials);
      console.log(responce);
      return responce;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const responce = await api.login(credentials);
      return responce;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await api.logOut();
      return responce;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
