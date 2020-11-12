import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import moment, { relativeTimeRounding } from 'moment';
import TimeComponent from '../components/TimeComponent';
import {
  dayStartHour,
  dayStartMinute,
  dayEndHour,
  dayEndMinute,
  interval,
} from '../utils/constants';

export default function TimePicker() {
  var start = moment()
    .hour(dayStartHour)
    .minute(dayStartMinute)
    .seconds(0)
    .milliseconds(0);
  var end = moment().hour(dayEndHour).minute(dayEndMinute);
  let times = [moment(start)];

  while (start.isBefore(end)) {
    start.add(interval, 'minutes');
    times.push(moment(start));
  }

  times.push(moment(end));

  const renderItem = ({ item }) => (
    <TimeComponent title={item.format('HH:mm')} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={times}
        renderItem={renderItem}
        keyExtractor={item => item.format('HH:mm')}
        numColumns={4}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e4e4',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
