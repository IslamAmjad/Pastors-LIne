// Importing necessary libraries and components
import React from "react";
import { Modal, Table } from "react-bootstrap";

// DetailModal component definition
const DetailModal = ({ detailItem, show, setShow }) => {
  // Handler function to close the modal
  const handleClose = () => setShow(false);

  // Function to render table rows based on the detailItem
  const renderTableRows = () => {
    // Return null if there's no detail item
    if (!detailItem) return null;

    // Define the details to be displayed in the table
    const details = [
      { label: "First Name", value: detailItem.first_name },
      { label: "Email", value: detailItem.email },
      { label: "Phone", value: detailItem.full_phone_number },
      { label: "Country Code", value: detailItem.country_id },
    ];

    // Map through the details and render table rows
    return details.map((detail, index) => (
      <tr key={index}>
        <th>{detail.label}</th>
        <td>{detail.value}</td>
      </tr>
    ));
  };

  return (
    // Bootstrap modal component
    <Modal show={show} onHide={handleClose} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>Contact Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="scrollable-table-container">
          {/* Bootstrap table component */}
          <Table striped bordered hover>
            <tbody>{renderTableRows()}</tbody>
          </Table>
        </div>
      </Modal.Body>
    </Modal>
  );
};

// Exporting the DetailModal component to be used in other parts of the application
export default DetailModal;
