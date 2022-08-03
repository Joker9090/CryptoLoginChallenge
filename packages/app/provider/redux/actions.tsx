import * as t from './types';
import axios from 'axios';

export type MainReduxActions = {
  getProducts: Function,
  cleanProduct: Function,
  getProduct: Function,
  saveLocalProduct: Function,
  filterProducts: Function,
  removeLocalProduct: Function,
  createProduct: Function,
}

export const getTest = () => (dispatch: any) => {
  const config = {
    headers:{
      'X-CoinAPI-Key': '06F0362C-7B8C-4A3E-A75E-AF32AF521A81',
    }
  };

  axios.get(`https://rest.coinapi.io/v1/exchanges`, config)
  .then(res => {
    dispatch({ type: t.GET_TEST, payload: JSON.stringify(res) });
  })
  .catch(err => {
    dispatch({ type: t.GET_TEST, payload: "Error" });
  })
  /*
  axios.defaults.headers.common['X-CoinAPI-Key'] = `73034021-THIS-IS-SAMPLE-KEY`;

  curl https://rest.coinapi.io/v1/exchanges \
  --request GET 
  --header "X-CoinAPI-Key: 73034021-THIS-IS-SAMPLE-KEY"

  */
}