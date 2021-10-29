import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';

import Card from '../../components/Card';
import PetBadge from '../../components/PetBadge';
import PetDisability from '../../components/disability/PetDisability';
import BoxTitle from '../../components/titles/BoxTitle';

const PetDetailScreen = (props) => {
  const petId = props.route.params.petId;
  const selectedPet = useSelector(state => state.pets.pets.find(pet => pet.id === petId));

  // console.log('selectedPet.disabilities', selectedPet.disabilities);

  return (
    <ScrollView contentContainerStyle={{}}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: selectedPet.imageUri }} style={styles.image} />
        <PetBadge icon={selectedPet.type} size={50} position={{ top: 10, right: 10 }} color={{ badge: "rgba(255,255,255,0.6)", icon: "rgba(0,0,0,0.6)" }} />
      </View>
      <Card style={styles.card}>
        <BoxTitle title="Breed" />
        <View>
          <Text>{selectedPet.breed}</Text>
        </View>
      </Card>
      {
        selectedPet.disabled === 1 && <PetDisability disabilities={selectedPet.disabilities} />
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
  imageContainer: {
    height: '25%',
    minHeight: 200,
    width: '100%',
  },
  image: {
    height: '100%',
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