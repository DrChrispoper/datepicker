import { UserActionTypes } from './types';

export interface setBookingInterface {
  type: UserActionTypes.SET_BOOKING;
  payload: string;
}
export const setBooking = (booking: string) => ({
  type: UserActionTypes.SET_BOOKING,
  payload: booking,
});

export type UserActionInterfaces =
  | setBookingInterface;
