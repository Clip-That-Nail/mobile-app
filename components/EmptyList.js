import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const EmptyList = (props) => {
  return (
    <View style={styles.emptyListContainer}>
      <Text style={styles.emptyListMessage}>{props.text}</Text>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  emptyListMessage: {
    color: '#777',
    fontSize: 13
  }
});

export default EmptyList;