import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const CompleteSpecialIcon = (props) => {
  const { status } = props;

  const displayContent = () => {
    switch (status) {
      case 'checked':
        return (
          <View style={{ ...styles.checkbox, ...styles.checked }}>
            <View style={styles.checkboxBody}>
              <Entypo name="scissors" size={40} color='white' />
            </View>
          </View>
        );
      case 'bleeded':
        return (
          <View style={{ ...styles.checkbox, ...styles.bleeded }}>
            <View style={styles.checkboxBody}>
              <Ionicons name="water" size={40} color='white' />
            </View>
          </View>
        );
      case 'warning':
        return (
          <View style={{ ...styles.checkbox, ...styles.warning }}>
            <View style={styles.checkboxBody}>
              <Ionicons name="alert" size={40} color='black' />
            </View>
          </View>
        );
      case 'disabled':
        return (
          <View style={{ ...styles.checkbox, ...styles.disabled }}>
            <View style={styles.checkboxBody}>
              <Ionicons name="close" size={40} color='white' />
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
      setStatus('disabled');
      props.onPress('disabled');
    } else if (status === 'unchecked') {
      setStatus('checked');
      props.onPress('checked');
    } else if (status === 'checked') {
      setStatus('bleeded');
      props.onPress('bleeded');
    } else if (status === 'bleeded') {
      setStatus('warning');
      props.onPress('warning');
    } else if (status === 'warning') {
      setStatus('unchecked');
      props.onPress('unchecked');
    }
  }

  return (
    <View>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{props.badgeText}</Text>
      </View>
      {displayContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    padding: 0,
    width: 50,
    height: 50,
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

export default CompleteSpecialIcon;