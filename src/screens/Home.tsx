import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setBooked } from '../redux/actions';
import { ApplicationState } from '../redux/store';

export default function App({ navigation }) {
  const { booked } = useSelector((state: ApplicationState) => state.user);
  const dispatch = useDispatch();

  const onPressBook = () => {
    dispatch(setBooked(false));
    navigation.navigate('DateSelector');
  };

  return (
    <View style={styles.container}>
      <Text>
        {booked ? 'You are all booked' : "You don't have a booking yet"}
      </Text>
      <Button
        onPress={onPressBook}
        title={booked ? 'Change Booking' : 'Book Now'}
        accessibilityLabel="Book your appointment"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
