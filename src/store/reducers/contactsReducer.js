import { FETCH_CONTACTS_START, FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_ERROR } from '../actionTypes';

const initialState = {
  contacts: [],
  loading: false,
  error: null
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_START:
      return { ...state, loading: true };
    case FETCH_CONTACTS_SUCCESS:
      return { ...state, contacts: action.payload, loading: false };
    case FETCH_CONTACTS_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default contactsReducer;
