import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CustomPicker = ({ label, value, options, handleChange }) => {
  const displayOptions = () => {
    return options.map(option => <Picker.Item label={option.label} value={option.value} key={option.value} />)
  };

  return (
    <View style={styles.customPicker}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={value}
          onValueChange={handleChange}>
          {displayOptions()}
        </Picker>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  customPicker: {
    // marginBottom: 10,
  },
  label: {
    fontSize: 13,
    paddingLeft: 15,
    marginBottom: 2,
    fontWeight: 'bold',
    color: "#555"
  },
  picker: {
    elevation: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 10,
    paddingLeft: 7,
  }
});

export default CustomPicker;