import { createStore, applyMiddleware } from 'redux';
import { v4 } from 'uuid';
import axios from 'axios';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// ========== Actions Constants ==========
export const FETCH_TASK = 'FETCH_TASK';
export const POST_TASK = 'POST_TASK';
export const DELETE_TASK = 'DELETE_TASK';

// ========== Initial State ==========
const initialState = {
  data: [],
};

// ========== Reducer: Todo ==========
export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TASK:
      return { ...state, data: action.payload };
    case POST_TASK:
      return { ...state, data: [...state.data, action.payload] };
    case DELETE_TASK:
      return { ...state, data: state.data.filter((task) => task.id !== action.payload) };
    default:
      return state;
  }
}

// ========== Action Creators Sync ==========
export function fetchInit(data) {
  return { type: FETCH_TASK, payload: data };
}

export function fetchPost(data) {
  return { type: POST_TASK, payload: data };
}
export function fetchDelete(data) {
  return { type: DELETE_TASK, payload: data };
}

// ========== Action Creators ==========
export function getData() {
  return async function (dispatch) {
    const result = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
    dispatch(fetchInit(result.data));
  };
}

export function postData(task) {
  return async function (dispatch) {
    const result = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
      id: v4(),
      title: task,
      completed: false,
    });
    dispatch(fetchPost(result.data));
  };
}

export function deleteData(id) {
  return async function (dispatch) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    dispatch(fetchDelete(id));
  };
}

// ========== Store ==========
export const store = createStore(todoReducer, composeWithDevTools(applyMiddleware(thunk)));
