import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import CloseSessionHeaderButton from '../components/CloseSessionHeaderButton';

const PostNewSessionScreen = (props) => {
  return (
    <View><Text>Post New Session Screen</Text></View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'New session conditions',
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <CloseSessionHeaderButton navData={navData} />
    </HeaderButtons>),
  };
};

const styles = StyleSheet.create({});

export default PostNewSessionScreen;