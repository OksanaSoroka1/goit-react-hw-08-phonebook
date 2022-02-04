import * as authOperations from '../auth/operations';
import * as itemOperations from '../items/operations';
import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
  name: 'error',
  initialState: null,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      itemOperations.fetchContacts.rejected,
      (state, action) => (state = action.payload),
    );
    builder.addCase(
      itemOperations.postContact.rejected,
      (state, action) => (state = action.payload),
    );
    builder.addCase(
      itemOperations.deleteContact.rejected,
      (state, action) => (state = action.payload),
    );
    builder.addCase(
      authOperations.login.rejected,
      (state, action) => (state = action.payload),
    );
    builder.addCase(
      authOperations.register.rejected,
      (state, action) => (state = action.payload),
    );
    builder.addCase(
      authOperations.logout.rejected,
      (state, action) => (state = action.payload),
    );

    builder.addCase(
      itemOperations.deleteContact.fulfilled,
      state => (state = null),
    );
    builder.addCase(
      itemOperations.postContact.fulfilled,
      state => (state = null),
    );
    builder.addCase(
      itemOperations.fetchContacts.fulfilled,
      state => (state = null),
    );
    builder.addCase(authOperations.login.fulfilled, state => (state = null));
    builder.addCase(authOperations.register.fulfilled, state => (state = null));
    builder.addCase(authOperations.logout.fulfilled, state => (state = null));

    builder.addCase(
      itemOperations.deleteContact.pending,
      state => (state = null),
    );
    builder.addCase(
      itemOperations.postContact.pending,
      state => (state = null),
    );
    builder.addCase(
      itemOperations.fetchContacts.pending,
      state => (state = null),
    );
    builder.addCase(authOperations.login.pending, state => (state = null));
    builder.addCase(authOperations.register.pending, state => (state = null));
    builder.addCase(authOperations.logout.pending, state => (state = null));
  },
});

export default errorSlice.reducer;
