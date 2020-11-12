import { UserState, UserActionTypes } from './types';
import { UserActionInterfaces } from './actions';
import { Reducer } from 'redux';
import moment from 'moment';

const INIT_STATE: UserState = {
  booked: false,
  date: `${moment().dayOfYear()}`,
  time: '',
};

const reducer: Reducer<UserState, UserActionInterfaces> = (
  state = INIT_STATE,
  action: UserActionInterfaces
) => {
  switch (action.type) {
    case UserActionTypes.SET_BOOKED:
      return {
        ...state,
        booked: action.payload,
      };
    case UserActionTypes.SET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case UserActionTypes.SET_TIME:
      return {
        ...state,
        time: action.payload,
      };
    default:
      return { ...state };
  }
};

export { reducer as userReducer };
