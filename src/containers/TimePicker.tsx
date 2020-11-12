import React from 'react';
import { StyleSheet, FlatList, ScrollView, Text } from 'react-native';
import moment from 'moment';
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
  let morning = [moment(start)];
  let afternoon = [];
  let evening = [moment(end)];

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

  const renderItem = ({ item }) => (
    <TimeComponent title={item.format('HH:mm')} />
  );

  return (
    <ScrollView style={styles.container}>
      <Text>MORNING</Text>
      <FlatList
        data={morning}
        renderItem={renderItem}
        keyExtractor={item => item.format('HH:mm')}
        numColumns={4}
        columnWrapperStyle={styles.row}
      />
      <Text>AFTERNOON</Text>
      <FlatList
        data={afternoon}
        renderItem={renderItem}
        keyExtractor={item => item.format('HH:mm')}
        numColumns={4}
        columnWrapperStyle={styles.row}
      />
      <Text>EVENING</Text>
      <FlatList
        data={evening}
        renderItem={renderItem}
        keyExtractor={item => item.format('HH:mm')}
        numColumns={4}
        columnWrapperStyle={styles.row}
      />
    </ScrollView>
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
