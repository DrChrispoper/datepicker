import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    margin: 5,
  },
  title: {
    fontSize: 32,
  },
});

const TimeComponent = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default TimeComponent;
