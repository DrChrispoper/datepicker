import { UserState, UserActionTypes } from './types';
import { UserActionInterfaces } from './actions';
import { Reducer } from 'redux';

const INIT_STATE: UserState = {
  booking: '',
};

const reducer: Reducer<UserState, UserActionInterfaces> = (
  state = INIT_STATE,
  action: UserActionInterfaces
) => {
  switch (action.type) {
    case UserActionTypes.SET_BOOKING:
      return {
        ...state,
        booking: action.payload,
      };
    default:
      return { ...state };
  }
};

export { reducer as userReducer };
