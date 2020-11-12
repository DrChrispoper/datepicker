import { compose, applyMiddleware, createStore } from "redux";
import reducer from "./reducers";

const middlewares: any[] = [];

export default function configureStore() {
  const enhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  return store;
}
