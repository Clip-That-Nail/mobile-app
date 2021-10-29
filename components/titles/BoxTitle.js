import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BoxTitle = (props) => {

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 10,
  },
  title: {
    fontFamily: 'roboto',
    textTransform: 'uppercase',
    fontSize: 18,
    color: '#333'
  },
});

export default BoxTitle;