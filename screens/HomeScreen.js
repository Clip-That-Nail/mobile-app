import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

import Colors from '../constants/Colors';

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Button icon="paw" mode="contained" color={Colors.greenColor} onPress={() => props.navigation.navigate({ routeName: 'NewSession' })}>
        Start new clipping
      </Button>
      <View style={styles.sessions}>
        <Text>Sessions list</Text>
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Clip That Nails',
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Menu" iconName='ios-menu' onPress={() => {
        navData.navigation.toggleDrawer();
      }} />
    </HeaderButtons>)
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10
  },
  startButton: {
  }
});

export default HomeScreen;