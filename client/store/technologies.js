import axios from "axios";

// ACTION TYPES
const SET_TECHNOLOGIES = "SET_TECHNOLOGIES";
const CREATE_TECHNOLOGY = "CREATE_TECHNOLOGY";

// ACTION CREATORS
const setTechnologies = (technologies) => {
  return {
    type: SET_TECHNOLOGIES,
    technologies
  }
};

const createTechnology = (technology) => {
  return {
    type: CREATE_TECHNOLOGY,
    technology
  }
}

// THUNKS
export const fetchTechnologies = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get("/api/technologies")
      const data = result.data
      dispatch(setTechnologies(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const addTechnology = (name) => {
  return async (dispatch) => {
    try {
      const result = await axios.post("/api/technologies", {name})
      const data = result.data
      dispatch(createTechnology(data))
    } catch (err) {
      console.log(err)
    }
  }
}

// REDUCER
export default function technologiesReducer (state = [], action) {
  switch (action.type) {
    case SET_TECHNOLOGIES:
      return action.technologies
      case CREATE_TECHNOLOGY:
        return [...state, action.technology]
    default:
      return state
  }
}
