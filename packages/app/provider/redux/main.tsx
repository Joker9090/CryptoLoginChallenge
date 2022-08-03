import * as t from './types';

export type MainReducerState = {
  current: String
  all_subjects: any
}

const INITIAL_STATE = {
  current: "",
  all_subjects: {}
}
const mainReducer = (state = INITIAL_STATE, action) => {
  console.log("action", action)
  switch (action.type) {
    case t.GET_TEST:
      return {
        ...state,
        current: action.payload
      }
    default:
      return state
  }
};

export default mainReducer;