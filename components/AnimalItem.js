import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListItem from './ListItem';
import Colors from '../constants/Colors';

const AnimalItem = props => {
  return (
    <ListItem onSelect={props.onSelect}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.animalData.imageUri }} />
        <View style={styles.animalType}>
          <MaterialCommunityIcons name={props.animalData.type} size={20} color="black" />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{props.animalData.name}</Text>
        <Text style={styles.breed}>{props.animalData.breed}</Text>
      </View>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  animalType: {
    position: 'absolute',
    bottom: 3,
    right: 3,
    width: 20,
    height: 20,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: '#ccc',
    borderColor: Colors.primary,
    borderWidth: 1
  },
  infoContainer: {
    marginLeft: 25,
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
