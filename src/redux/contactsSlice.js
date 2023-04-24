import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from 'redux/operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state, action) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // reducers: {
  //   add: (state, action) => {
  //     state.contacts.unshift(action.payload);
  //   },
  //   remove: (state, action) => {
  //     return {
  //       contacts: state.contacts.filter(
  //         contact => contact.id !== action.payload
  //       ),
  //     };
  //   },
  // },
});

// export const { add, remove } = contactsSlice.actions;
