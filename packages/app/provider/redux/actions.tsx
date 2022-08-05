import * as t from './types';
import { ServiceCryptoApi, ServiceCryptoApi2, ServiceLoginApi } from 'app/services/services';
import { FormProps } from '../../components/LoginForm'
import { CryptoObject } from 'app/models/CryptoObject';
import config from '../../config/config';

const LoginApi = new ServiceLoginApi(); // SINGLETON
// const CryptoApi = new ServiceCryptoApi(); // SINGLETON // OLD
const CryptoApi = new ServiceCryptoApi2(); // SINGLETON 

export type MainReduxActions = {
  doLogin: Function,
  getCryptos: Function,
  getCrypto: Function
}

export enum ServerStatus { IDLE, FETCH, FETCHING, FETCH_ERROR };

export const doLogin = ({ email, password }: FormProps) => (dispatch: any) => {
  const commonMessage = `There is a problem with the server`;
  dispatch({ type: t.FETCHING_LOGIN });
  LoginApi.doLogin(email, password).then((response: any) => {
    if (response.data) dispatch({ type: t.FETCH_LOGIN, payload: { email, password } });
    else dispatch({ type: t.FETCH_ERROR_LOGIN, payload: response.message || commonMessage });
  }).catch((response) => {
    dispatch({ type: t.FETCH_ERROR_LOGIN, payload: response.message || commonMessage });
  });
}

export const getCryptos = () => (dispatch: any) => {
  dispatch({ type: t.FETCHING_CRYPTOS });
  const commonMessage = `There is a problem with the server`;
  CryptoApi.SetToken(`${config.coinapi_API_KEY}`);
  CryptoApi.GetCryptosPromise().then((response: CryptoObject[]) => {
    dispatch({ type: t.FETCH_CRYPTOS, payload: response });
  }).catch((response) => {
    dispatch({ type: t.FETCH_ERROR_CRYPTOS, payload: response.message || commonMessage });
  })
}

export const getCrypto = (id: String) => (dispatch: any) => {
  dispatch({ type: t.FETCHING_CRYPTO });
  const commonMessage = `There is a problem with the server`;
  CryptoApi.GetCryptoPromise(id).then((response: CryptoObject) => {
    dispatch({ type: t.FETCH_CRYPTO, payload: response });
  }).catch((response) => {
    dispatch({ type: t.FETCH_ERROR_CRYPTO, payload: response.message || commonMessage });
  })
}