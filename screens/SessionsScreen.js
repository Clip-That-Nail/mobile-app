import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SessionsScreen = (props) => {
  return (
    <View><Text>Sessions Screen</Text></View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'All Sessions',
  };
};

const styles = StyleSheet.create({});

export default SessionsScreen;