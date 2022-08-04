import { ServerStatus } from './actions';
import * as t from './types';

export type MainReducerState = {
  loginStatus: ServerStatus,
  loginServerMsg: string | null,
}

const INITIAL_STATE = {
  loginStatus: ServerStatus.IDLE,
  loginServerMsg: null
}
const mainReducer = (state = INITIAL_STATE, action) => {
  console.log("action", action)
  switch (action.type) {
    case t.FETCH_LOGIN:
      return {
        ...state,
        loginStatus: ServerStatus.FETCH,
      }
    case t.FETCHING_LOGIN:
      return {
        ...state,
        loginStatus: ServerStatus.FETCHING,
      }
    case t.FETCH_ERROR_LOGIN:
      return {
        ...state,
        loginStatus: ServerStatus.FETCH_ERROR,
        loginServerMsg: action.payload
      }
    default:
      return state
  }
};

export default mainReducer;