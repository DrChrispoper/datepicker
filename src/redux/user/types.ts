export interface UserState {
  readonly booked: boolean;
  readonly date: string;
  readonly time: string;
}

// Describing the different ACTION NAMES available
export enum UserActionTypes {
  SET_BOOKED = '@@user/SET_BOOKED',
  SET_DATE = '@@user/SET_DATE',
  SET_TIME = '@@user/SET_TIME',
}
