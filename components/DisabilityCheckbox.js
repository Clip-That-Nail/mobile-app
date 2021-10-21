import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const DisabilityCheckbox = (props) => {
  const [status, setStatus] = useState(props.initialStatus);

  const displayContent = () => {
    switch (status) {
      case 'disabled':
        return (
          <View style={{ ...styles.checkbox, ...styles.disabled }}>
            <View style={styles.checkboxBody}>
              <Ionicons name="close" size={30} color={Colors.redColor} />
            </View>
          </View>
        );
      default:
        return (
          <View style={{ ...styles.checkbox, ...styles.unchecked }}>
            <View style={styles.checkboxBody}></View>
          </View>
        );
    }
  };

  const handleOnPress = () => {
    if (status === 'disabled') {
      setStatus('unchecked');
      props.onPress('unchecked');
    } else if (status === 'unchecked') {
      setStatus('disabled');
      props.onPress('disabled');
    }
  }

  return (
    <TouchableNativeFeedback onPress={handleOnPress}>
      <View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{props.badgeText}</Text>
        </View>
        {displayContent()}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    padding: 0,
    width: 40,
    height: 40,
    borderRadius: 5,
    borderWidth: 5,
    zIndex: 1
  },
  checkboxBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unchecked: {
    backgroundColor: 'lightgrey',
    borderColor: 'grey'
  },
  disabled: {
    backgroundColor: '#999999',
    borderColor: 'grey'
  },
  badge: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -7,
    right: -7,
    width: 20,
    height: 20,
    borderRadius: 100,
    borderColor: '#666',
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: 'grey',
    zIndex: 2
  },
  badgeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DisabilityCheckbox;