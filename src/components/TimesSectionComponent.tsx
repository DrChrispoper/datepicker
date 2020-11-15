import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TimeComponent from './TimeComponent';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const TimesSectionComponent = ({ times, title }) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        {times.map(time => (
          <TimeComponent key={time.format('HH:mm')} time={time} />
        ))}
      </View>
    </>
  );
};

export default TimesSectionComponent;
