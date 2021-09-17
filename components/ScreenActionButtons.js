import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ScreenActionButtons = (props) => {

  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="add" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Add</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="stats-chart" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Stats</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 15,
    paddingTop: 10,
    flexDirection: 'row',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  iconContainer: {
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    elevation: 1
  },
  textContainer: {
    padding: 5
  },
  text: {
    color: "#777",
    fontSize: 13,
    fontWeight: "100",
  },
});

export default ScreenActionButtons;