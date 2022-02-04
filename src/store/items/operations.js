import * as api from '../../API/contactsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

const postContact = createAsyncThunk(
  'item/Add',
  async (contact, { rejectWithValue }) => {
    try {
      const responce = await api.postContact(contact);
      return responce.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const deleteContact = createAsyncThunk(
  'item/delet',
  async (id, { rejectWithValue }) => {
    try {
      const responce = await api.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const fetchContacts = createAsyncThunk(
  'item/download',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await api.fetchContact();
      return responce.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export { postContact, deleteContact, fetchContacts };
