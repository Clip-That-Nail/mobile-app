import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton';

const DogsListScreen = (props) => {
  return (
    <View><Text>Dogs List Screen</Text></View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'Your Doggos',
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Add new doggo" iconName='add' onPress={() => {
        navData.navigation.navigate('AddNewDog');
      }} />
    </HeaderButtons>)
  };
};

const styles = StyleSheet.create({});

export default DogsListScreen;