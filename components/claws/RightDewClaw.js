import React from 'react';
import { Image } from 'react-native';

import bleeded from '../../assets/images/claws/rightDewClaw/bleeded.png';
import checked from '../../assets/images/claws/rightDewClaw/checked.png';
import disabled from '../../assets/images/claws/rightDewClaw/disabled.png';
import empty from '../../assets/images/claws/rightDewClaw/empty.png';
import warning from '../../assets/images/claws/rightDewClaw/warning.png';

const RightDewClaw = ({ type, styles }) => {
  switch (type) {
    case 'bleeded':
      return <Image style={styles.image} source={bleeded} />;
    case 'checked':
      return <Image style={styles.image} source={checked} />;
    case 'disabled':
      return <Image style={styles.image} source={disabled} />;
    case 'empty':
      return <Image style={styles.image} source={empty} />;
    case 'warning':
      return <Image style={styles.image} source={warning} />;
  }
};

export default RightDewClaw;