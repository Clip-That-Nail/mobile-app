import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const SessionStatusIcon = (props) => {
  const { status, iconSize } = props;

  const displayContent = () => {
    switch (status) {
      case 'finished':
        return (
          <>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="check-circle-outline" size={iconSize} color={Colors.greenDarkColor} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>finished</Text>
            </View>
          </>
        );
      case 'unfinished':
        return (
          <>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="progress-check" size={iconSize} color={Colors.blueDarkColor} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>unfinished</Text>
            </View>
          </>
        );
    }
  };

  return (
    <View style={styles.statusIconContainer}>
      {displayContent()}
    </View>
  );
};

SessionStatusIcon.defaultProps = {
  status: 'finished',
  iconSize: 20,
};

const styles = StyleSheet.create({
  statusIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
  },
  iconContainer: {
  },
  textContainer: {
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: Colors.gray700
  },
});

export default SessionStatusIcon;