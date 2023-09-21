// Importing necessary libraries
import React from 'react';

// LoaderComponent definition
const LoaderComponent = () => {
  return (
    // Outer div that covers the entire viewport
    <div 
      style={{
        position: 'fixed', // Position fixed to cover the entire viewport
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999, // Ensure the loader is on top of all other content
        backgroundColor: 'rgba(255, 255, 255, 0.8)' // Semi-transparent white background
      }}
      className="d-flex justify-content-center align-items-center" // Center the spinner both vertically and horizontally
    >
      {/* Bootstrap spinner component */}
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span> {/* Accessibility: Text for screen readers */}
      </div>
    </div>
  );
};

// Exporting the LoaderComponent to be used in other parts of the application
export default LoaderComponent;
