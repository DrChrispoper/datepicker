import { compose, applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import { UserState } from './user/types';

export interface ApplicationState {
  user: UserState;
}

const middlewares: any[] = [];

export default function configureStore() {
  const enhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(reducers, enhancer);
  return store;
}
