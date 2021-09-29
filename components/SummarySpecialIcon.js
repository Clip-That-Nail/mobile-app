import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const SummarySpecialIcon = (props) => {
  const { status, iconSize, boxSize } = props;

  const displayContent = () => {
    switch (status) {
      case 'checked':
        return (
          <View style={{ ...styles.checkbox, ...styles.checked, ...{ width: boxSize, height: boxSize } }}>
            <View style={styles.checkboxBody}>
              <Entypo name="scissors" size={iconSize} color='white' />
            </View>
          </View>
        );
      case 'bleeded':
        return (
          <View style={{ ...styles.checkbox, ...styles.bleeded, ...{ width: boxSize, height: boxSize } }}>
            <View style={styles.checkboxBody}>
              <Ionicons name="water" size={iconSize} color='white' />
            </View>
          </View>
        );
      case 'warning':
        return (
          <View style={{ ...styles.checkbox, ...styles.warning, ...{ width: boxSize, height: boxSize } }}>
            <View style={styles.checkboxBody}>
              <Ionicons name="alert" size={iconSize} color='black' />
            </View>
          </View>
        );
      case 'disabled':
        return (
          <View style={{ ...styles.checkbox, ...styles.disabled, ...{ width: boxSize, height: boxSize } }}>
            <View style={styles.checkboxBody}>
              <Ionicons name="close" size={iconSize} color='white' />
            </View>
          </View>
        );
      default:
        return (
          <View style={{ ...styles.checkbox, ...styles.unchecked, ...{ width: boxSize, height: boxSize } }}>
            <View style={styles.checkboxBody}></View>
          </View>
        );
    }
  };

  return (
    <View>
      {displayContent()}
    </View>
  );
};

SummarySpecialIcon.defaultProps = {
  iconSize: 20,
  boxSize: 30,
};

const styles = StyleSheet.create({
  checkbox: {
    padding: 0,
    borderRadius: 5,
    borderWidth: 3,
    zIndex: 1
  },
  checkboxBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: Colors.greenColor,
    borderColor: Colors.greenColor
  },
  bleeded: {
    backgroundColor: Colors.redColor,
    borderColor: Colors.redColor
  },
  warning: {
    backgroundColor: Colors.yellowColor,
    borderColor: Colors.yellowColor
  },
  unchecked: {
    backgroundColor: 'lightgrey',
    borderColor: 'grey'
  },
  disabled: {
    backgroundColor: '#999999',
    borderColor: 'grey'
  },
});

export default SummarySpecialIcon;