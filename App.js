import React, { useState, useEffect } from 'react';
import { LogBox } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';

import store from './redux/store';
import AppNavigator from './navigation/AppNavigator';
import { insertSession, updatePet } from './helpers/db';

enableScreens();
LogBox.ignoreLogs(['Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).']);

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-thin': require('./assets/fonts/Roboto-Thin.ttf'),
    'roboto-thin-italic': require('./assets/fonts/Roboto-ThinItalic.ttf'),
    'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
    'roboto-light-italic': require('./assets/fonts/Roboto-LightItalic.ttf'),
    'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-medium-italic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-bold-italic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
    'roboto-black': require('./assets/fonts/Roboto-Black.ttf'),
    'roboto-black-italic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
  });
};

// init().then(() => {
//   console.log('Initialised database.');
// }).catch(err => {
//   console.log('Initialising db failed.');
//   console.log(err);
// });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  // TODO: create that to test if it's working properly - maybe create your own seeder for tests?
  // useEffect(() => {

    // updatePet(1, 'Narcyz', 'dog', 'Mix', 'file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540pawelbak%252Fclip-that-nail-app/61415610-5488-4b7f-bac8-d719581411d0.jpg');
    // updatePet(2, 'Laika', 'dog', 'Whippet', 'file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540pawelbak%252Fclip-that-nail-app/0df5b055-91f3-433f-8147-ad723bd113f6.jpg');
    // updatePet(4, 'Scooby', 'dog', 'German Dog', 'file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540pawelbak%252Fclip-that-nail-app/025c0a4c-fbf5-4355-bbf6-11016321f837.jpg');

  //   insertSession(2, {
  //     frontLeft: {
  //       firstClaw: { status: 'unchecked', outcome: 'not-selected', behaviour: 'not-selected' },
  //       secondClaw: { status: 'unchecked', outcome: 'not-selected', behaviour: 'not-selected' },
  //       thirdClaw: { status: 'unchecked', outcome: 'not-selected', behaviour: 'not-selected' },
  //       fourthClaw: { status: 'unchecked', outcome: 'not-selected', behaviour: 'not-selected' },
  //       dewClaw: { status: 'unchecked', outcome: 'not-selected', behaviour: 'not-selected' },
  //     },
  //     frontRight: {
  //       firstClaw: { status: 'unchecked', outcome: 'not-selected', behaviour: 'not-selected' },
  //       secondClaw: { status: 'unchecked', outcome: 'not-selected', behaviour: 'not-selected' },
  //       thirdClaw: { status: 'unchecked', outcome: 'not-selected', behaviour: 'not-selected' },
  //       fourthClaw: { status: 'unchecked', outcome: 'not-selected', behaviour: 'not-selected' },
  //       dewClaw: { status: 'unchecked', outcome: 'not-selected', behaviour: 'not-selected' },
  //     },
  //     backLeft: {
  //       firstClaw: { status: 'unchecked', outcome: 'not-selected', behaviour: 'not-selected' },
  //       secondClaw: { status: 'unchecked', outcome: 'not-selected', behaviour: 'not-selected' },
  //       thirdClaw: { status: 'unchecked', outcome: 'not-selected', behaviour: 'not-selected' },
  //       fourthClaw: { status: 'unchecked', outcome: 'not-selected', behaviour: 'not-selected' },
  //     },
  //     backRight: {
  //       firstClaw: { status: 'unchecked', outcome: 'not-selected', behaviour: 'not-selected' },
  //       secondClaw: { status: 'unchecked', outcome: 'not-selected', behaviour: 'not-selected' },
  //       thirdClaw: { status: 'unchecked', outcome: 'not-selected', behaviour: 'not-selected' },
  //       fourthClaw: { status: 'unchecked', outcome: 'not-selected', behaviour: 'not-selected' },
  //     },
  //   })
  // }, []);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}