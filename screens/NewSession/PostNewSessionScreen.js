import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { LinearGradient } from 'expo-linear-gradient';

import HeaderButton from '../../components/HeaderButton';
import CloseSessionHeaderButton from '../../components/CloseSessionHeaderButton';

const PostNewSessionScreen = (props) => {
  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['white', 'transparent']}
        locations={[0.05, 0.3]}
        style={styles.background}
      />
      <Text>Post New Session Screen</Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'New session conditions',
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <CloseSessionHeaderButton
        onYesNotFinishedPress={() => {
          // TODO: what to do here?
          navData.navigation.navigate('Home', { screen: 'Home' })
        }}
        onYesPress={() => {
          navData.navigation.navigate('Home', { screen: 'Home' })
        }}
      />
    </HeaderButtons>),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eff1f5',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
});

export default PostNewSessionScreen;