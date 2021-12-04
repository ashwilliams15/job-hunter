import axios from "axios";

// ACTION TYPES
const SET_TECHNOLOGIES = "SET_TECHNOLOGIES";
const CREATE_TECHNOLOGY = "CREATE_TECHNOLOGY";
const UPDATE_TECHNOLOGY = "UPDATE_TECHNOLOGY";
const DELETE_TECHNOLOGY = "DELETE_TECHNOLOGY";

// ACTION CREATORS
const setTechnologies = (technologies) => {
  return {
    type: SET_TECHNOLOGIES,
    technologies,
  };
};

const createTechnology = (technology) => {
  return {
    type: CREATE_TECHNOLOGY,
    technology,
  };
};

const updateTechnology = (technology) => {
  return {
    type: UPDATE_TECHNOLOGY,
    technology,
  };
};

const deleteTechnology = (technology) => {
  return {
    type: DELETE_TECHNOLOGY,
    technology,
  };
};

// THUNKS
export const fetchTechnologies = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get("/api/technologies");
      const data = result.data;
      dispatch(setTechnologies(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addTechnology = (name) => {
  return async (dispatch) => {
    try {
      const result = await axios.post("/api/technologies", { name });
      const data = result.data;
      dispatch(createTechnology(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const putTechnology = (technology) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.put(
        `/api/technologies/${technology.id}`,
        technology
      );
      dispatch(updateTechnology(created));
    } catch (err) {
      console.log(err);
    }
  };
};

export const destroyTechnology = (technology) => {
  return async (dispatch) => {
    try {
      const result = await axios.delete(
        `/api/technologies/${technology.id}`,
        technology
      );
      dispatch(deleteTechnology(result.data));
    } catch (err) {
      console.log(err);
    }
  };
};

// REDUCER
export default function technologiesReducer(state = [], action) {
  switch (action.type) {
    case SET_TECHNOLOGIES:
      return action.technologies;
    case CREATE_TECHNOLOGY:
      return [...state, action.technology];
    case UPDATE_TECHNOLOGY:
      return state.map((technology) =>
        technology.id === action.technology.id ? action.technology : technology
      );
    case DELETE_TECHNOLOGY:
      return state.filter(
        (technology) => technology.id !== action.technology.id
      );
    default:
      return state;
  }
}
