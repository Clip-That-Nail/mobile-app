import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';

import Card from '../../components/Card';
import PawImage from '../../components/PawImage';
import Colors from '../../constants/Colors';

const PetDetailScreen = (props) => {
  const petId = props.route.params.petId;
  const selectedPet = useSelector(state => state.pets.pets.find(pet => pet.id === petId));

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
      <Image source={{ uri: selectedPet.imageUri }} style={styles.image} />
      <Card style={styles.card}>
        <View>
          <Text>{selectedPet.breed}</Text>
        </View>
      </Card>
      {
        selectedPet.disabled && (
          <Card style={styles.card}>
            <Text>{selectedPet.disabled}</Text>
            {/* <PawImage pawData={} />
            <PawImage pawData={} />
            <PawImage pawData={} />
            <PawImage pawData={} /> */}
          </Card>
        )
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
    width: '95%',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 0
  }
});

export default PetDetailScreen;