import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton';
import CloseSessionHeaderButton from '../../components/CloseSessionHeaderButton';

const PostNewSessionScreen = (props) => {
  return (
    <View><Text>Post New Session Screen</Text></View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'New session conditions',
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <CloseSessionHeaderButton onYesPress={() => {
            navData.navigation.navigate('Home', { screen: 'Home' })
          }} />
    </HeaderButtons>),
  };
};

const styles = StyleSheet.create({});

export default PostNewSessionScreen;