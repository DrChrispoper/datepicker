import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setTime } from '../redux/actions';
import { ApplicationState } from '../redux/store';
import moment from 'moment';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    height: 60,
    width: '25%',
  },
  title: {
    fontSize: 28,
  },
  selectedItem: {
    backgroundColor: '#f9c2ff',
  },
  disabled: {
    opacity: 0.5,
  },
});

const TimeComponent = ({ time }) => {
  const dispatch = useDispatch();

  const { time: selectedTime, date } = useSelector(
    (state: ApplicationState) => state.user
  );

  const isToday = date == `${moment().dayOfYear()}`;
  const isBeforeNow = isToday && time.isBefore(moment());

  const selectTime = () => {
    if (!isBeforeNow) {
      dispatch(setTime(time.format('HH:mm')));
    }
  };

  const isSelectedTime = selectedTime == time.format('HH:mm');

  return (
    <TouchableOpacity onPress={selectTime} style={styles.item}>
      <View
        style={[
          isSelectedTime && styles.selectedItem,
          isBeforeNow && styles.disabled,
        ]}
      >
        <Text style={styles.title}>{time.format('HH:mm')}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TimeComponent;
