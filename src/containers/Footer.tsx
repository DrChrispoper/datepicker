import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../redux/store';
import { setBooked } from '../redux/actions';
import moment from 'moment';

export default function Footer() {
  const { date, time } = useSelector((state: ApplicationState) => state.user);
  const dispatch = useDispatch();

  const timeIsSet = time != '';

  const goNext = () => {
    if (timeIsSet) {
      dispatch(setBooked(true));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text>{moment(date, 'DDDD').format('ddd MMM Do')}</Text>
        <Text>{timeIsSet ? time : 'No time selected'}</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, timeIsSet && styles.enabled]}
        onPress={goNext}
      >
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    flex: 0,
    flexDirection: 'row',
  },
  left: {
    flex: 2,
    height: '100%',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  enabled: {
    backgroundColor: '#f9c2ff',
  },
});
