import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DatePicker from '../containers/DatePicker';
import Times from '../containers/Times';
import Footer from '../containers/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <DatePicker />
      <Times />
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
