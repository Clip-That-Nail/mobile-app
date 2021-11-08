import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import allowToCut from '../assets/images/behaviours/allow-to-cut.png';
import skip1Session from '../assets/images/behaviours/skip-1-session.png';
import skip2Session from '../assets/images/behaviours/skip-2-session.png';
import skip3Session from '../assets/images/behaviours/skip-3-session.png';

const BehaviourImage = ({ size, behaviour }) => {
  const imageSource = () => {
    let source;
    switch (behaviour) {
      case 'allow-to-cut':
        source = allowToCut;
        break;
      case 'skip-1-session':
        source = skip1Session;
        break;
      case 'skip-2-session':
        source = skip2Session;
        break;
      case 'skip-3-session':
        source = skip3Session;
        break;
      // case 'not-selected':
      //   source = skip3Session;
      //   break;
    }
    return source;
  };

  return (
    <View style={styles.imageContainer}>
      <Image style={{ ...styles.image, width: size, height: size }} source={imageSource()} />
    </View>
  );
};

BehaviourImage.defaultProps = {
  size: 30,
  behaviour: 'not-selected'
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    padding: 2
  },
  image: {}
});

export default BehaviourImage;