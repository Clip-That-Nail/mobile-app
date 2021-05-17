import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import { CommonActions } from '@react-navigation/native';

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
        onPress={() => {
          props.navigation.navigate('NewSession', {}, CommonActions.navigate({ routeName: 'PreNewSession' }))
        }
        }>
        Start new clipping
      </Button>
    </View>
  );
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