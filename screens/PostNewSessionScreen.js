import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

const PostNewSessionScreen = (props) => {
  return (
    <View><Text>Post New Session Screen</Text></View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'New session conditions',
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Stop session" iconName='close' onPress={() => {
        navData.navigation.navigate('Home', {}, CommonActions.navigate('Home'))
      }} />
    </HeaderButtons>),
  };
};

const styles = StyleSheet.create({});

export default PostNewSessionScreen;