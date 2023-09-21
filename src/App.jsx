// Importing necessary libraries and components
import React from "react";
import { Route, Routes } from "react-router-dom";

// Importing page components
import Home from "./pages/Home";
import AllContact from "./pages/AllContact";
import UsContact from './pages/UsContact';

const App = () => {
  return (
    // Using the Routes component to define the application's routing structure
    <Routes>
      {/* Defining the route for the home page */}
      <Route path="/" element={<Home />} />

      {/* Defining the route for the page that displays all contacts */}
      <Route path="/all-contact" element={<AllContact />} />

      {/* Defining the route for the page that displays US contacts */}
      <Route path="/us-contact" element={<UsContact />} />
    </Routes>
  );
};

// Exporting the App component to be used in other parts of the application
export default App;
