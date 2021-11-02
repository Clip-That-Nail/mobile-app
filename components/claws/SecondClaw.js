import React from 'react';
import { Image } from 'react-native';

import bleeded from '../../assets/images/claws/secondClaw/bleeded.png';
import checked from '../../assets/images/claws/secondClaw/checked.png';
import disabled from '../../assets/images/claws/secondClaw/disabled.png';
import empty from '../../assets/images/claws/secondClaw/empty.png';
import warning from '../../assets/images/claws/secondClaw/warning.png';

const SecondClaw = ({ type, styles }) => {
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
    default:
      return <Image style={styles.image} source={empty} />;
  }
};

export default SecondClaw;