import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors';

const ListItem = props => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.listItem}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    elevation: 1,
    backgroundColor: 'white',
    borderRadius: 20,
  },
});

export default ListItem;
