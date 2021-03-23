import React, { useState } from 'react';
import { LogBox } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';

import store from './redux/store';
import AppNavigator from './navigation/AppNavigator';

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

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

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