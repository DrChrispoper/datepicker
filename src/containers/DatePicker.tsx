import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import moment from 'moment';
import DateComponent from '../components/DateComponent';
import { daysInAdvance } from '../utils/constants';

export default function DatePicker() {
  var now = moment();
  let days = [];

  for (let index = 0; index < daysInAdvance; index++) {
    days.push(moment(now).add(index, 'days'));
  }

  const renderItem = ({ item }) => (
    <DateComponent title={item.format('ddd DD')} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        renderItem={renderItem}
        keyExtractor={item => `${item.dayOfYear()}`}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
});
