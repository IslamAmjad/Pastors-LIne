// Importing the createSelector function from the 'reselect' library
// This function is used to create memoized selectors which can improve performance by avoiding unnecessary recalculations
import { createSelector } from 'reselect';

// Base selector to get the 'contactData' slice of the state
const selectContactsState = state => state.contactData;

// Selector to get the 'loading' state from the 'contactData' slice
// It uses createSelector to memoize the result, ensuring that the selector only recomputes when 'contactData' changes
export const selectLoading = createSelector(
  [selectContactsState], // Input selectors array
  contactData => contactData.loading // Transform function
);

// Selector to get the 'error' state from the 'contactData' slice
export const selectError = createSelector(
  [selectContactsState],
  contactData => contactData.error
);

// Selector to get the 'contacts' state from the 'contactData' slice
export const selectContacts = createSelector(
  [selectContactsState],
  contactData => contactData.contacts
);
