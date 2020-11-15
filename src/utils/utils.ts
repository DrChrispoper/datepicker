import moment from 'moment';
import {
  dayStartHour,
  dayStartMinute,
  dayEndHour,
  dayEndMinute,
  interval,
} from '../utils/constants';

export function getTimes() {
  var start = moment()
    .hour(dayStartHour)
    .minute(dayStartMinute)
    .seconds(0)
    .milliseconds(0);
  var end = moment()
    .hour(dayEndHour)
    .minute(dayEndMinute - 1);
  let morning = [moment(start)];
  let afternoon = [];
  let evening = [];

  while (start.isBefore(end)) {
    start.add(interval, 'minutes');
    if (start.hours() < 12) {
      morning.push(moment(start));
    } else if (start.hours() < 19) {
      afternoon.push(moment(start));
    } else {
      evening.push(moment(start));
    }
  }

  return { morning, afternoon, evening };
}
