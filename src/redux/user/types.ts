export interface UserState {
  readonly booking: string;
}

// Describing the different ACTION NAMES available
export enum UserActionTypes {
  SET_BOOKING = '@@user/SET_BOOKING',
}
