import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import DatePicker from '../containers/DatePicker';
import TimePicker from '../containers/TimePicker';
import Footer from '../containers/Footer';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../redux/store';

export default function App({ navigation }) {
  const { booked } = useSelector((state: ApplicationState) => state.user);

  useEffect(() => {
    if (booked) {
      navigation.goBack();
    }
  }, [booked]);

  return (
    <View style={styles.container}>
      <DatePicker />
      <TimePicker />
      <Footer />
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
