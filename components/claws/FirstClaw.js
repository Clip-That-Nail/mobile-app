import React from 'react';
import { Image } from 'react-native';

import bleeded from '../../assets/images/claws/first/bleeded.png';
import checked from '../../assets/images/claws/first/checked.png';
import disabled from '../../assets/images/claws/first/disabled.png';
import empty from '../../assets/images/claws/first/empty.png';
import warning from '../../assets/images/claws/first/warning.png';

const FirstClaw = ({ type, styles }) => {
  switch (type) {
    case 'bleeded':
      return <Image style={styles.image} source={bleeded} />;
    case 'checked':
      return <Image style={styles.image} source={checked} />;
    case 'disabled':
      return <Image style={styles.image} source={disabled} />;
    case 'warning':
      return <Image style={styles.image} source={warning} />;
    case 'empty':
    case 'unchecked':
    default:
      return <Image style={styles.image} source={empty} />;
  }
};

export default FirstClaw;