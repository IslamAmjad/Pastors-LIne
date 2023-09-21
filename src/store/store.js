// Importing necessary functions and libraries from Redux and Redux Thunk
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Importing the combined root reducer
import rootReducer from './reducers/rootReducer';

// Creating the Redux store
// rootReducer is used to specify how the state will change in response to actions
// applyMiddleware is used to apply the thunk middleware to the store
// Thunk middleware allows you to write action creators that return a function instead of an action
const store = createStore(rootReducer, applyMiddleware(thunk));

// Exporting the configured store to be used in the application
export default store;
