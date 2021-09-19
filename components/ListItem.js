import React from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

const ListItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp onPress={props.onSelect} useForeground>
      <View style={styles.listItem}>
        {props.children}
      </View>
    </TouchableCmp>
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
    overflow: 'hidden',
  },
});

export default ListItem;
