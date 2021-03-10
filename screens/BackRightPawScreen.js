import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const BackRightPawScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Ionicons name="paw" size={180} color={Colors.violetColor} />
      <Text>BackRightPawScreen</Text>
    </View>
  );
};

BackRightPawScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Back Right Paw'
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default BackRightPawScreen;