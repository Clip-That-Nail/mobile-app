import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ScreenTitle = (props) => {

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    paddingBottom: 15
  },
  title: {
    fontSize: 30
  },
});

export default ScreenTitle;