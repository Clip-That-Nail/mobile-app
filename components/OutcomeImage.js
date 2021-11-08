import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import checkedNotSelected from '../assets/images/outcomes/checked-not-selected.png';
import checkedLittleClip from '../assets/images/outcomes/checked-little-clip.png';
import checkedMediumClip from '../assets/images/outcomes/checked-medium-clip.png';
import checkedStrongClip from '../assets/images/outcomes/checked-strong-clip.png';
import bleededNotSelected from '../assets/images/outcomes/bleeded-not-selected.png';
import bleededLittleBleed from '../assets/images/outcomes/bleeded-little-bleed.png';
import bleededMediumBleed from '../assets/images/outcomes/bleeded-medium-bleed.png';
import bleededStrongBleed from '../assets/images/outcomes/bleeded-strong-bleed.png';
import warningNotEnoughNail from '../assets/images/outcomes/warning-not-enough-nail.png';
import warningVisibleQuick from '../assets/images/outcomes/warning-visible-quick.png';

const OutcomeImage = ({ size, status, outcome }) => {

  const imageSource = () => {
    let source;
    switch (status) {
      case 'checked':
        switch (outcome) {
          case 'not-selected':
            source = checkedNotSelected;
            break;
          case 'little-clip':
            source = checkedLittleClip;
            break;
          case 'medium-clip':
            source = checkedMediumClip;
            break;
          case 'strong-clip':
            source = checkedStrongClip;
            break;
        }
        break;
      case 'bleeded':
        switch (outcome) {
          case 'not-selected':
            console.log('status', status);
            console.log('outcome', outcome);
            source = bleededNotSelected;
            break;
          case 'little-bleed':
            source = bleededLittleBleed;
            break;
          case 'medium-bleed':
            source = bleededMediumBleed;
            break;
          case 'strong-bleed':
            source = bleededStrongBleed;
            break;
        }
        break;
      case 'warning':
        switch (outcome) {
          case 'not-enough-nail':
            source = warningNotEnoughNail;
            break;
          case 'visible-quick':
            source = warningVisibleQuick;
            break;
        }
        break;
    }
    return source;
  };

  return (
    <View style={styles.imageContainer}>
      <Image style={{ ...styles.image, width: size, height: size }} source={imageSource()} />
    </View>
  );
};

OutcomeImage.defaultProps = {
  size: 30,
  status: 'checked',
  outcome: 'not-selected'
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    padding: 2,
  },
  image: {

  }
});

export default OutcomeImage;