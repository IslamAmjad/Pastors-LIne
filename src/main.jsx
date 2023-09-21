// Importing necessary libraries and components
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// Importing Bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing Redux provider to make the store available to all container components
import { Provider } from 'react-redux';

// Importing the Redux store configuration
import store from './store/store.js';

// Importing global CSS styles
import './index.css';

// Importing React Router's BrowserRouter component for routing
import { BrowserRouter as Router } from 'react-router-dom';

// Rendering the main application
ReactDOM.render(
  // Wrapping the entire app with the Redux provider to give access to the Redux store
  <Provider store={store}>
    {/* Wrapping the App component with the Router for handling routing within the app */}
    <Router>
      <App />
    </Router>
  </Provider>,
  // Specifying the root element where the app will be mounted
  document.getElementById('root')
);
