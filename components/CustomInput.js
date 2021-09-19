import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const CustomInput = ({ label, placeholder, value, handleChange }) => {
  return (
    <View style={styles.customInput}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} onChange={handleChange} value={value} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  customInput: {
    marginBottom: 10,
  },
  label: {
    fontSize: 13,
    paddingLeft: 15,
    marginBottom: 2,
    fontWeight: 'bold',
    color: "#555"
  },
  input: {
    elevation: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 15,
  },
});

export default CustomInput;