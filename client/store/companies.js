import axios from "axios";

// ACTION TYPES
const SET_COMPANIES = "SET_COMPANIES";
const CREATE_COMPANY = "CREATE_COMPANY";
const DELETE_COMPANY = "DELETE_COMPANY";

// ACTION CREATORS
const setCompanies = (companies) => {
  return {
    type: SET_COMPANIES,
    companies,
  };
};

const createCompany = (company) => {
  return {
    type: CREATE_COMPANY,
    company,
  };
};

const deleteCompany = (company) => {
  return {
    type: DELETE_COMPANY,
    company,
  };
};

// THUNKS
export const fetchCompanies = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get("/api/companies");
      const data = result.data;
      dispatch(setCompanies(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addCompany = (name, notes) => {
  return async (dispatch) => {
    try {
      const result = await axios.post("/api/companies", { name, notes });
      const data = result.data;
      dispatch(createCompany(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const destroyCompany = (company) => {
  return async (dispatch) => {
    try {
      const result = await axios.delete(`/api/companies/${company.id}`);
      dispatch(deleteCompany(result.data));
    } catch (err) {
      console.log(err);
    }
  };
};

// REDUCER
export default function companiesReducer(state = [], action) {
  switch (action.type) {
    case SET_COMPANIES:
      return action.companies;
    case CREATE_COMPANY:
      return [...state, action.company];
    case DELETE_COMPANY:
      return state.filter((company) => company.id !== action.company.id);
    default:
      return state;
  }
}
