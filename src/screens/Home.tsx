import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App({ navigation }) {

  const onPressLearnMore = () => {
    navigation.navigate('DateSelector')
  }

  return (
    <View style={styles.container}>
      <Text>You don't have a booking yet</Text>
      <Button  onPress={onPressLearnMore}  title="Book Now" accessibilityLabel="Book your appointment"/>
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
