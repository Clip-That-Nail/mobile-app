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
    borderRadius: 20,
    backgroundColor: 'white',
  },
});

export default Card;
