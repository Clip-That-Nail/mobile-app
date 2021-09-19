import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

import ListItem from './ListItem';

const AnimalItem = props => {
  return (
    <ListItem onSelect={props.onSelect}>
      <Image style={styles.image} source={{ uri: props.animalData.imageUri }} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{props.animalData.name}</Text>
        <Text style={styles.breed}>{props.animalData.breed}</Text>
      </View>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  animalItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ccc',
    borderColor: Colors.primary,
    borderWidth: 1
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  name: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5
  },
  breed: {
    color: '#666',
    fontSize: 16
  }
});

export default AnimalItem;