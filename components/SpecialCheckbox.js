import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const SpecialCheckbox = (props) => {

  console.log(props.initialStatus);

  const [status, setStatus] = useState(props.initialStatus);
  const [checkboxStyle, setCheckboxStyle] = useState({ ...styles.checkbox, ...styles.unchecked });

  const displayContent = () => {
    switch (status) {
      case 'checked':
        return (
          <View style={styles.checkboxBody}>
            <Ionicons name="checkmark" size={40} color='white' />
          </View>
        );
      case 'crossed':
        return (
          <View style={styles.checkboxBody}>
            <Ionicons name="close" size={40} color='white' />
          </View>
        );
      case 'alert':
        return (
          <View style={styles.checkboxBody}>
            <Ionicons name="alert" size={40} color='black' />
          </View>
        );
      default:
        <View style={styles.checkboxBody}></View>
        break;
    }
  };

  const handleOnPress = () => {
    if (status === 'unchecked') {
      setStatus('checked');
      props.onPress('checked');
      setCheckboxStyle({ ...styles.checkbox, ...styles.checked });
    } else if (status === 'checked') {
      setStatus('alert');
      props.onPress('alert');
      setCheckboxStyle({ ...styles.checkbox, ...styles.alert });
    } else if (status === 'alert') {
      setStatus('crossed');
      props.onPress('crossed');
      setCheckboxStyle({ ...styles.checkbox, ...styles.crossed });
    } else if (status === 'crossed') {
      setStatus('unchecked');
      props.onPress('unchecked');
      setCheckboxStyle({ ...styles.checkbox, ...styles.unchecked });
    }
  }

  return (
    <TouchableNativeFeedback onPress={handleOnPress}>
      <View style={checkboxStyle}>
        {displayContent()}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    padding: 0,
    width: 50,
    height: 50,
    borderRadius: 5,
    borderWidth: 5,
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
  crossed: {
    backgroundColor: Colors.redColor,
    borderColor: Colors.redColor
  },
  alert: {
    backgroundColor: Colors.yellowColor,
    borderColor: Colors.yellowColor
  },
  unchecked: {
    backgroundColor: 'lightgrey',
    borderColor: 'grey'
  }
});

export default SpecialCheckbox;