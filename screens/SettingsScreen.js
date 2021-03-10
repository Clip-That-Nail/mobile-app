import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

const SettingsScreen = (props) => {
  return (
    <View><Text>Settings Screen</Text></View>
  );
};

SettingsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Clip That Nails',
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Menu" iconName='ios-menu' onPress={() => {
        navData.navigation.toggleDrawer();
      }} />
    </HeaderButtons>)
  };
};

const styles = StyleSheet.create({});

export default SettingsScreen;