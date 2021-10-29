import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';

import Card from '../../components/Card';
import PawImage from '../../components/PawImage';
import PetDisability from '../../components/disability/PetDisability';
import BoxTitle from '../../components/titles/BoxTitle';

const PetDetailScreen = (props) => {
  const petId = props.route.params.petId;
  const selectedPet = useSelector(state => state.pets.pets.find(pet => pet.id === petId));

  console.log('selectedPet', selectedPet);

  return (
    <ScrollView contentContainerStyle={{}}>
      <Image source={{ uri: selectedPet.imageUri }} style={styles.image} />
      <Card style={styles.card}>
        <BoxTitle title="Breed" />
        <View>
          <Text>{selectedPet.breed}</Text>
        </View>
      </Card>
      {
        selectedPet.disabled && <PetDisability disabilities={selectedPet.disabilities} />
      }
    </ScrollView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: navData.route.params.petName,
  }
};

const styles = StyleSheet.create({
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
    backgroundColor: '#ccc'
  },
  card: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 0
  }
});

export default PetDetailScreen;