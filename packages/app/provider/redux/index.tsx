import { Provider } from 'react-redux';
import rootReducer from "./rootReducer"
import { createStore, applyMiddleware, compose } from "redux"
import { createWrapper } from "next-redux-wrapper"
import thunk from "redux-thunk"

const middleware = [thunk]
const store = createStore(rootReducer);
export const makeStore = () => createStore(rootReducer, compose(applyMiddleware(...middleware)))
export const wrapper = createWrapper(makeStore);

export const ReduxProvider = ({ children }) => {
  return (
    <Provider store={makeStore()}>
      {children}
    </Provider>
  )
}