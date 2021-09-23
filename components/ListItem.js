import React from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

import Card from './Card';

const ListItem = props => {
  let TouchableCmp = TouchableOpacity;

  // TODO: for some reason this doesn't work...
  // if (Platform.OS === 'android' && Platform.Version >= 21) {
  //   TouchableCmp = TouchableNativeFeedback;
  // }

  return (
    <TouchableCmp onPress={props.onSelect} useForeground>
      <Card style={styles.listItem}>
        {props.children}
      </Card>
    </TouchableCmp>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
  },
});

export default ListItem;
