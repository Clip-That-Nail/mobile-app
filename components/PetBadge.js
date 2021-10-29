import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PetBadge = ({ icon, size, position, color }) => {
  return (
    <View style={{
      ...styles.badge,
      backgroundColor: color.badge,
      width: size,
      height: size,
      borderRadius: (size + 10),
      ...position
    }}>
      <MaterialCommunityIcons name={icon} size={(size - 2)} color={color.icon} />
    </View>
  );
};

PetBadge.defaultProps = {
  icon: 'dog',
  size: 20,
  position: {
    bottom: 3,
    right: 3
  },
  color: {
    badge: 'rgba(255,255,255,0.6)',
    icon: 'rgba(0,0,0,0.6)'
  }
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3
  },
});

export default PetBadge;