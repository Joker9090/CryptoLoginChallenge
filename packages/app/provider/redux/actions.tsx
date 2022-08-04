import * as t from './types';
import axios from 'axios';
import { ServiceLoginApi } from 'app/services/services';
import { FormProps } from '../../components/LoginForm'
const LoginApi = new ServiceLoginApi();

export type MainReduxActions = {
  doLogin: Function,
}
export enum ServerStatus { IDLE, FETCH, FETCHING, FETCH_ERROR };

export const doLogin = ({ email, password }: FormProps) => (dispatch: any) => {
  const commonMessage = `There is a problem with the server`;
  dispatch({ type: t.FETCHING_LOGIN });
  LoginApi.doLogin(email, password).then((response: any) => {
    console.log("response", response)
    if (response.data) dispatch({ type: t.FETCH_LOGIN, payload: { email, password } });
    else dispatch({ type: t.FETCH_ERROR_LOGIN, payload: response.message || commonMessage });
  }).catch((response) => {
    dispatch({ type: t.FETCH_ERROR_LOGIN, payload: response.message || commonMessage });
  });
}
export const getTest = () => (dispatch: any) => {
  const config = {
    headers: {
      'X-CoinAPI-Key': process.env.NEXT_PUBLIC_API_URL,
    }
  };
  dispatch({ type: t.GET_TEST, payload: `${process.env.NEXT_PUBLIC_API_URL}` });

  /*
  axios.get(`https://rest.coinapi.io/v1/exchanges`, config)
  .then(res => {
    dispatch({ type: t.GET_TEST, payload: JSON.stringify(res) });
  })
  .catch(err => {
    dispatch({ type: t.GET_TEST, payload: "Error" });
  })
  */
  /*
  axios.defaults.headers.common['X-CoinAPI-Key'] = `73034021-THIS-IS-SAMPLE-KEY`;

  curl https://rest.coinapi.io/v1/exchanges \
  --request GET 
  --header "X-CoinAPI-Key: 73034021-THIS-IS-SAMPLE-KEY"

  */
}