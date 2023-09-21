import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';

const rootReducer = combineReducers({
  contactData: contactsReducer,
});

export default rootReducer;


