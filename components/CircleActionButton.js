import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';

const CircleActionButton = ({ children, buttonSize, side, buttonType, onPress }) => {

  const sideStyle = (side) => {
    switch (side) {
      case 'left':
        return styles.leftActionButton;
      case 'right':
        return styles.rightActionButton;
      default:
        return styles.default;
    }
  };

  const typeStyle = (type) => {
    switch (type) {
      case 'edit':
        return styles.edit;
      case 'remove':
        return styles.remove;
      default:
        return styles.default;
    }
  };

  return (
    <View style={{ ...styles.actionButtonContainer, ...sideStyle(side) }}>
      <TouchableOpacity style={{ ...styles.button, ...{ height: buttonSize, width: buttonSize }, ...typeStyle(buttonType) }} onPress={onPress}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  actionButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftActionButton: {
    paddingLeft: 10,
  },
  rightActionButton: {
    paddingRight: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blueColor,
    borderRadius: 100,
  },
  edit: {
    backgroundColor: Colors.blueColor,
  },
  remove: {
    backgroundColor: Colors.redColor,
  },
});

export default CircleActionButton;