import axios from "axios";

// ACTION TYPES
const SET_CONTACTS = "SET_CONTACTS";
const CREATE_CONTACT = "CREATE_CONTACT";

// ACTION CREATORS
const setContacts = (contacts) => {
  return {
    type: SET_CONTACTS,
    contacts,
  };
};

const createContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    contact,
  };
};

// THUNKS
export const fetchContacts = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get("/api/contacts");
      const data = result.data;
      dispatch(setContacts(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addContact = (
  firstName,
  lastName,
  company,
  title,
  linkedIn,
  email,
  phone
) => {
  return async (dispatch) => {
    try {
      const result = await axios.post("/api/contacts", {
        firstName,
        lastName,
        company,
        title,
        linkedIn,
        email,
        phone,
      });
      const data = result.data;
      dispatch(createContact(data));
    } catch (err) {
      console.log(err);
    }
  };
};

// REDUCER
export default function (state = [], action) {
  switch (action.type) {
    case SET_CONTACTS:
      return action.contacts;
    case CREATE_CONTACT:
      return [...state, action.contact];
    default:
      return state;
  }
}
