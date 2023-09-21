// Importing necessary libraries and components
import React, { useState } from "react";
import { Modal, Button, Form, InputGroup, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { isObject } from "../Utility/genericFunctions";
import {
  selectContacts,
  selectLoading,
  selectError,
} from "../store/contactSelectors";
import { debounce, isEmpty } from "lodash";
import { fetchData } from "../store/actions/contactActions";

const CustomModal = ({ type, contacts, setDetail, loading, fetchData }) => {
  // State hooks for search term and even filtering
  const [searchTerm, setSearchTerm] = useState("");
  const [onlyEven, setOnlyEven] = useState(false);
  const navigate = useNavigate();

  // Function to simulate an API call
  const makeApiCall = (query) => {
    console.log(`Making API call with query: ${query}`);
  };

  // Debouncing the API call to avoid excessive calls during typing
  const debouncedApiCall = debounce(makeApiCall, 600);

  // Handler to close the modal
  const handleClose = () => navigate("/");

  // Handler for search input change
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedApiCall(value);
  };

  // Handler for pressing the Enter key in the search input
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !isEmpty(searchTerm)) {
      makeApiCall(searchTerm);
    }
  };

  // Handler for the search button click
  const handelSearch = () => {
    if (!isEmpty(searchTerm)) {
      makeApiCall(searchTerm);
    }
  };

  // Function to render table rows based on the contacts data
  const renderTableRows = () => {
    if (!isObject(contacts)) return null;

    return Object.values(contacts.contacts).map((item) => (
      <tr key={item.id} onClick={() => setDetail(item)}>
        <td>{item.id}</td>
        <td>{item.first_name}</td>
        <td>{item.email}</td>
        <td>{item.full_phone_number}</td>
        <td>{item.country_id}</td>
      </tr>
    ));
  };

  return (
    <Modal show={true} onHide={handleClose} size="lg" backdrop="static">
      <Modal.Header closeButton>
        <div className="w-100 d-flex flex-column">
          <Modal.Title className="mb-2">
            {type === "A" ? "All Contacts" : "US Contacts"}
          </Modal.Title>
          <div className="d-flex justify-content-start">
            <Button
              onClick={() => {
                /* Switch to Modal A */
              }}
              style={{ backgroundColor: "#46139f", border: "none" }}
              className="mr-2"
            >
              All Contacts
            </Button>
            <Button
              style={{ backgroundColor: "#ff7f50", border: "none" }}
              onClick={() => {
                /* Switch to Modal B */
              }}
              className="mr-2"
            >
              US Contacts
            </Button>
            <Button variant="outline-primary" onClick={handleClose}>
              Close
            </Button>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={handelSearch}>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <div className="scrollable-table-container">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Country ID</th>
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </Table>
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-content-start">
        <Form.Check
          type="checkbox"
          label="Only even"
          id="evenCheckbox"
          checked={onlyEven}
          onChange={() => setOnlyEven(!onlyEven)}
        />
      </Modal.Footer>

    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: selectContacts(state),
    loading: selectLoading(state),
    error: selectError(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: (queryObject) => dispatch(fetchData(queryObject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomModal);
