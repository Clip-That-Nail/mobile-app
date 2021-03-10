import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const BackLeftPawSummaryScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Ionicons name="paw" size={180} color={Colors.redColor} />
      <Text>BackLeftPawSummaryScreen</Text>
    </View>
  );
};

BackLeftPawSummaryScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Back Left Paw Summary'
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default BackLeftPawSummaryScreen;