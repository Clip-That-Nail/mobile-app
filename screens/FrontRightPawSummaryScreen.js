import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FrontRightPawSummaryScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>FrontRightPawSummaryScreen</Text>
    </View>
  );
};

FrontRightPawSummaryScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Front Right Paw Summary'
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FrontRightPawSummaryScreen;