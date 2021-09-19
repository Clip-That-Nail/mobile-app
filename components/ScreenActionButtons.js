import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

const ScreenActionButtons = ({ buttonsData }) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  const displayButtons = () => {
    return buttonsData.map(button => {
      return (
        <View style={styles.buttonContainer} key={button.text}>
          <TouchableCmp onPress={button.onPress} useForeground>
            <View style={styles.iconContainer}>
              {button.icon}
            </View>
          </TouchableCmp>
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
    overflow: 'hidden',
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