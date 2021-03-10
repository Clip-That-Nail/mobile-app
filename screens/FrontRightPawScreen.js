import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const FrontRightPawScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Ionicons name="paw" size={180} color={Colors.blueColor} />
      <Text>FrontRightPawScreen</Text>
    </View>
  );
};

FrontRightPawScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Front Right Paw'
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FrontRightPawScreen;