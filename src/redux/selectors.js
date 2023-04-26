export const selectContacts = state => state.contacts.contacts;

export const selectError = state => state.contacts.error;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilterValue = state => state.filterValue;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filterValue = selectFilterValue(state);
  const filteredItems = contacts.filter(contact => {
    return (
      contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
      contact.number.includes(filterValue)
    );
  });
  return filterValue ? filteredItems : contacts;
};
