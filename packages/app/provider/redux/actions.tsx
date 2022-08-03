import * as t from './types';
import axios from 'axios';

export type MainReduxActions = {
  getTest: Function,
}

export const getTest = () => (dispatch: any) => {
  const config = {
    headers:{
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