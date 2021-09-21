import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    elevation: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default Card;
