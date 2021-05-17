import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SettingsScreen = (props) => {
  return (
    <View><Text>Settings Screen</Text></View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'App Settings',
  };
};

const styles = StyleSheet.create({});

export default SettingsScreen;