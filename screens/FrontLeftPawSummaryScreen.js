import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FrontLeftPawSummaryScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>FrontLeftPawSummaryScreen</Text>
    </View>
  );
};

FrontLeftPawSummaryScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Front Left Paw Summary'
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FrontLeftPawSummaryScreen;