// Importing necessary libraries and components
import React, { useState } from "react";
import CustomModal from "../components/CustomModal";
import DetailModal from "../components/DetailModal";

// AllContact component definition
const AllContact = () => {
  // State to control the visibility of the DetailModal
  const [showDetailModal, setShowDetailModal] = useState(false);

  // State to store the selected contact detail item
  const [detailItem, setDetailItem] = useState(null);

  // Handler function to set the selected contact detail item and show the DetailModal
  const handleDetailItem = (item) => {
    setDetailItem(item);
    setShowDetailModal(true);
  };

  // Handler function to close the DetailModal and reset the selected contact detail item
  const handleModalClose = () => {
    setShowDetailModal(false);
    setDetailItem(null);
  };

  return (
    <div>
      {/* Rendering the CustomModal component with a callback to handle selected contact details */}
      <CustomModal type="A" setDetail={handleDetailItem} />

      {/* Rendering the DetailModal component to show the selected contact details */}
      <DetailModal
        show={showDetailModal}
        setShow={handleModalClose}
        detailItem={detailItem}
      />
    </div>
  );
};

// Exporting the AllContact component to be used in other parts of the application
export default AllContact;
