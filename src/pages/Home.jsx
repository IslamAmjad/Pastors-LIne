import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import LoaderComponent from "../components/LoaderComponent";
import { fetchData } from "../store/actions/contactActions";
import { selectLoading, selectError } from "../store/contactSelectors";

const Home = ({ loading, fetchData }) => {
  const navigate = useNavigate();

  // Function to fetch all contacts and navigate to the 'all-contact' route
  const getAllContact = async () => {
    const result = await fetchData();
    if (result.success) {
      navigate("all-contact");
    }
  };

  // Function to fetch US contacts and navigate to the 'us-contact' route
  const getUsContact = async () => {
    const result = await fetchData();
    if (result.success) {
      navigate("us-contact");
    }
  };

  return (
    <Container
      fluid
      style={{ height: "100vh" }}
      className="d-flex flex-column justify-content-center"
    >
      {/* Display loader if data is being fetched */}
      {loading && <LoaderComponent />}

      {/* Button to fetch all contacts */}
      <Row className="justify-content-center mb-2">
        <Col xs="auto">
          <Button variant="primary" className="m-2" onClick={getAllContact}>
            Button A
          </Button>
        </Col>
      </Row>

      {/* Button to fetch US contacts */}
      <Row className="justify-content-center mt-2">
        <Col xs="auto">
          <Button variant="secondary" className="m-2" onClick={getUsContact}>
            Button B
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
});

// Map Redux state to component props
const mapStateToProps = (state) => ({
  loading: selectLoading(state),
  error: selectError(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
