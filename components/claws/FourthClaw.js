import React from 'react';
import { Image } from 'react-native';

import bleeded from '../../assets/images/claws/fourthClaw/bleeded.png';
import checked from '../../assets/images/claws/fourthClaw/checked.png';
import disabled from '../../assets/images/claws/fourthClaw/disabled.png';
import empty from '../../assets/images/claws/fourthClaw/empty.png';
import warning from '../../assets/images/claws/fourthClaw/warning.png';

const FourthClaw = ({ type, styles }) => {
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

export default FourthClaw;