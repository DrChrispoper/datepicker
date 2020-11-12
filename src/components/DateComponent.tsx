import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../redux/actions';
import { ApplicationState } from '../redux/store';
import moment from 'moment';

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  selectedItem: {
    backgroundColor: '#f9c2ff',
  },
});

interface Props {
  day: moment.Moment;
}

const DateComponent = ({ day }: Props) => {
  const title = day.format('ddd DD');
  const dispatch = useDispatch();

  const { date } = useSelector((state: ApplicationState) => state.user);

  const selectDate = () => {
    dispatch(setDate(`${day.dayOfYear()}`));
  };

  const isSelectedDate = date == `${day.dayOfYear()}`;

  return (
    <TouchableOpacity onPress={selectDate}>
      <View style={[styles.item, isSelectedDate && styles.selectedItem]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DateComponent;
