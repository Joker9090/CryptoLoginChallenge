import { Provider } from 'react-redux';
import rootReducer from "./rootReducer"
import { configureStore } from '@reduxjs/toolkit'
import React from 'react';

export const makeStore = configureStore({
  reducer: rootReducer
})

export const ReduxProvider = ({ children }) => {
  return (
    <Provider store={makeStore}>
      {children}
    </Provider>
  )
}

export default ReduxProvider;
