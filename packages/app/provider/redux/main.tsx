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
    /*
    case t.GET_TEST:
      return {
        ...state,
        current: action.payload
      }
      */
    default:
      return state
  }
};

export default mainReducer;