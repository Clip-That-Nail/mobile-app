import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

import Colors from '../constants/Colors';

// <ImageBackground source={require('../assets/images/paw2.jpg')} style={styles.image} resizeMethod="resize" resizeMode="cover"></ImageBackground>
// </ImageBackground>

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.mainTitleContainer}>
        <Text style={styles.mainTitle}>Clip That Nail</Text>
      </View>
      <View style={styles.mainTitleContainer}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      </View>
      <Button icon="paw" mode="contained" color={Colors.greenColor} contentStyle={styles.startButton}
        onPress={() => props.navigation.navigate('NewSession', {}, NavigationActions.navigate({ routeName: 'PreNewSession' }))}>
        Start new clipping
      </Button>
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
    justifyContent: 'space-between',
    padding: 10
  },
  startButtonContainer: {
  },
  startButton: {
    padding: 15
  },
  mainTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50
  },
  mainTitle: {
    color: 'black',
    fontSize: 40,
    fontFamily: 'roboto-black',
  },
  logo: {
    width: 200,
    height: 200,
  }
});

export default HomeScreen;