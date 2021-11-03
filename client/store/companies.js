import axios from "axios";

// ACTION TYPES
const SET_COMPANIES = "SET_COMPANIES";

// ACTION CREATORS
const setCompanies = (companies) => {
  return {
    type: SET_COMPANIES,
    companies
  }
};

// THUNKS
export const fetchCompanies = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get("/api/companies")
      const data = result.data
      dispatch(setCompanies(data))
    } catch (err) {
      console.log(err)
    }
  }
}

// REDUCER
export default function companiesReducer (state = [], action) {
  switch (action.type) {
    case SET_COMPANIES:
      return action.companies
    default:
      return state
  }
}
