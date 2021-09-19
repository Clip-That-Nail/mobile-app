import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ScreenActionButtons = ({ buttonsData }) => {
  const displayButtons = () => {
    return buttonsData.map(button => {
      return (
        <View style={styles.buttonContainer} key={button.text}>
          <TouchableOpacity onPress={button.onPress} style={styles.iconContainer}>
            {button.icon}
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{button.text}</Text>
          </View>
        </View>
      );
    })
  }

  return (
    <View style={styles.buttonsContainer}>
      {displayButtons()}
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
    borderRadius: 29,
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