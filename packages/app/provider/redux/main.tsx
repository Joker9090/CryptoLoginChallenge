import { CryptoObject } from 'app/models/CryptoObject';
import { ServerStatus } from './actions';
import * as t from './types';

export type MainReducerState = {
  loginStatus: ServerStatus,
  loginServerMsg: string | null,
  cryptoStatus: ServerStatus,
  cryptoServerMsg: string | null,
  crypto: CryptoObject | null,
  cryptosStatus: ServerStatus,
  cryptos: CryptoObject[],
  cryptosServerMsg: string | null,
}

const INITIAL_STATE: MainReducerState = {
  loginStatus: ServerStatus.IDLE,
  loginServerMsg: null,
  cryptoStatus: ServerStatus.IDLE,
  cryptoServerMsg: null,
  crypto: null,
  cryptosStatus: ServerStatus.IDLE,
  cryptos: [],
  cryptosServerMsg: null,
}

const mainReducer = (state = INITIAL_STATE, action) => {
  console.log("=>", action.type, action.payload);
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
    case t.FETCH_ERROR_CRYPTO:
      return {
        ...state,
        cryptoStatus: ServerStatus.FETCH_ERROR,
      }
    case t.FETCH_CRYPTO:
      return {
        ...state,
        cryptoStatus: ServerStatus.FETCH,
        crypto: action.payload
      }
    case t.FETCHING_CRYPTO:
      return {
        ...state,
        cryptoStatus: ServerStatus.FETCHING,
      }
    case t.FETCH_ERROR_CRYPTOS:
      return {
        ...state,
        cryptosStatus: ServerStatus.FETCH_ERROR,
      }
    case t.FETCH_CRYPTOS:
      return {
        ...state,
        cryptosStatus: ServerStatus.FETCH,
        cryptos: action.payload
      }
    case t.FETCHING_CRYPTOS:
      return {
        ...state,
        cryptosStatus: ServerStatus.FETCHING,
      }
    default:
      return state
  }
};

export default mainReducer;