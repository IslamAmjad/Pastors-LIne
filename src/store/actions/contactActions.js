// Importing necessary modules and data
import { contactDummyData } from "../../assets/dummyData";
import {
  FETCH_CONTACTS_ERROR,
  FETCH_CONTACTS_START,
  FETCH_CONTACTS_SUCCESS,
} from "../actionTypes";
import axios from "axios";

// Retrieving the API token from the environment variables
const token = import.meta.env.VITE_API_TOKEN;

// Action creator for starting the contacts fetching process
export const fetchContactsStart = () => ({
  type: FETCH_CONTACTS_START,
});

// Action creator for successful contacts fetching
export const fetchContactsSuccess = (data) => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload: data,
});

// Action creator for handling errors during contacts fetching
export const fetchContactsError = (error) => ({
  type: FETCH_CONTACTS_ERROR,
  payload: error,
});

// Thunk action creator for fetching data
// This function dispatches other actions based on the result of the API call
export const fetchData = (queryObject) => async (dispatch) => {
  try {
    // Dispatch the start action
    dispatch(fetchContactsStart());

    // Make the API call
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE}?companyId=171&noGroupDuplicates=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Check if the response contains contact data, if not use dummy data
    dispatch(
      fetchContactsSuccess(
        response.data.contactData.contacts.contacts.length > 0 ? response.data : contactDummyData
      )
    );

    return { success: true }; // Return success status

  } catch (error) {
    // If there's an error, dispatch the dummy data instead of the error action
    // dispatch(fetchContactsError(error));

    // This dispatch and retrun true only for dummy data test purpose
    dispatch(fetchContactsSuccess(contactDummyData));

    return { success: true }; // Return error status and error object
  }
};
