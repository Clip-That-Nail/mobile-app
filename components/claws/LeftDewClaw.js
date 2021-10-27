import React from 'react';
import { Image } from 'react-native';

import bleeded from '../../assets/images/claws/leftDewClaw/bleeded.png';
import checked from '../../assets/images/claws/leftDewClaw/checked.png';
import disabled from '../../assets/images/claws/leftDewClaw/disabled.png';
import empty from '../../assets/images/claws/leftDewClaw/empty.png';
import warning from '../../assets/images/claws/leftDewClaw/warning.png';

const LeftDewClaw = ({ type, styles }) => {
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

export default LeftDewClaw;