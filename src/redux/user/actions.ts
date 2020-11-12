import { UserActionTypes } from './types';

export interface setBookedInterface {
  type: UserActionTypes.SET_BOOKED;
  payload: boolean;
}
export const setBooked = (booked: boolean) => ({
  type: UserActionTypes.SET_BOOKED,
  payload: booked,
});

export interface setDateInterface {
  type: UserActionTypes.SET_DATE;
  payload: string;
}
export const setDate = (date: string) => ({
  type: UserActionTypes.SET_DATE,
  payload: date,
});

export interface setTimeInterface {
  type: UserActionTypes.SET_TIME;
  payload: string;
}
export const setTime = (time: string) => ({
  type: UserActionTypes.SET_TIME,
  payload: time,
});

export type UserActionInterfaces =
  | setBookedInterface
  | setDateInterface
  | setTimeInterface;
