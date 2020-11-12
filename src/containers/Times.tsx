import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar } from 'react-native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default function Times() {
  return (
    <ScrollView style={styles.container}>
      <Text>Times</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e4e4',
  },
});
