import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const BackLeftPawScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Ionicons name="paw" size={180} color={Colors.redColor} />
      <Text>BackLeftPawScreen</Text>
    </View>
  );
};

BackLeftPawScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Back Left Paw'
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default BackLeftPawScreen;