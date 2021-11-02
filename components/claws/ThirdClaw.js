import React from 'react';
import { Image } from 'react-native';

import bleeded from '../../assets/images/claws/thirdClaw/bleeded.png';
import checked from '../../assets/images/claws/thirdClaw/checked.png';
import disabled from '../../assets/images/claws/thirdClaw/disabled.png';
import empty from '../../assets/images/claws/thirdClaw/empty.png';
import warning from '../../assets/images/claws/thirdClaw/warning.png';

const ThirdClaw = ({ type, styles }) => {
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

export default ThirdClaw;