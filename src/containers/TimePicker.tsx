import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import TimesSectionComponent from '../components/TimesSectionComponent';
import { getTimes } from '../utils/utils';

export default function TimePicker() {
  const { morning, afternoon, evening } = getTimes();

  return (
    <ScrollView style={styles.container}>
      <TimesSectionComponent times={morning} title={'MORNING'} />
      <TimesSectionComponent times={afternoon} title={'AFTERNOON'} />
      <TimesSectionComponent times={evening} title={'EVENING'} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e4e4',
  },
});
