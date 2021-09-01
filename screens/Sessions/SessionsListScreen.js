import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SessionsListScreen = (props) => {
  return (
    <View><Text>Sessions List Screen</Text></View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'All Sessions',
  };
};

const styles = StyleSheet.create({});

export default SessionsListScreen;