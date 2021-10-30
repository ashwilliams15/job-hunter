import axios from "axios";

// ACTION TYPES
const SET_TASKS = "SET_TASKS";

// ACTION CREATORS
const setTasks = (tasks) => {
  return {
    type: SET_TASKS,
    tasks
  }
};

// THUNKS
const getTasks = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get("/api/tasks")
      const data = result.data
      dispatch(setTasks(data))
    } catch (err) {
      console.log(err)
    }
  }
}

// REDUCER
export default function tasksReducer (state = [], action) {
  switch (action.type) {
    case SET_TASKS:
      return action.tasks
    default:
      return state
  }
}
