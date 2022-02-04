import * as authOperations from '../auth/operations';
import * as itemOperations from '../items/operations';
import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
  name: 'error',
  initialState: null,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      itemOperations.deleteContact.rejected ||
        itemOperations.postContact.rejected ||
        itemOperations.fetchContacts.rejected,
      (state, action) => (state = action.error),
    );
    builder.addCase(
      itemOperations.deleteContact.fulfilled ||
        itemOperations.postContact.fulfilled ||
        itemOperations.fetchContacts.fulfilled,
      state => (state = null),
    );
    builder.addCase(
      itemOperations.deleteContact.pending ||
        itemOperations.postContact.pending ||
        itemOperations.fetchContacts.pending,
      state => (state = null),
    );
  },
});

export default errorSlice.reducer;
