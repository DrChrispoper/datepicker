import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setTime } from '../redux/actions';
import { ApplicationState } from '../redux/store';

const styles = StyleSheet.create({
  item: {
    margin: 10,
  },
  title: {
    fontSize: 28,
  },
  selectedItem: {
    backgroundColor: '#f9c2ff',
  },
});

const TimeComponent = ({ time }) => {
  const dispatch = useDispatch();

  const { time: selectedTime } = useSelector(
    (state: ApplicationState) => state.user
  );

  const selectTime = () => {
    dispatch(setTime(time.format('HH:mm')));
  };

  const isSelectedTime = selectedTime == time.format('HH:mm');

  return (
    <TouchableOpacity onPress={selectTime}>
      <View style={[styles.item, isSelectedTime && styles.selectedItem]}>
        <Text style={styles.title}>{time.format('HH:mm')}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TimeComponent;
