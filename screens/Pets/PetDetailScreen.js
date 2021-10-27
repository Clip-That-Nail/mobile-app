import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';

import Card from '../../components/Card';
import PawImage from '../../components/PawImage';
import Colors from '../../constants/Colors';

const PetDetailScreen = (props) => {
  const petId = props.route.params.petId;
  const selectedPet = useSelector(state => state.pets.pets.find(pet => pet.id === petId));

  const displayPetDisabilities = () => {
    if (selectedPet.disabilities.length > 0) {
      const frontLeftDisability = [];
      const frontRightDisability = [];
      const backLeftDisability = [];
      const backRightDisability = [];

      selectedPet.disabilities.map(disability => {
        switch (disability.paw) {
          case 'frontLeft':
            frontLeftDisability.push(disability);
            break;
          case 'frontRight':
            frontRightDisability.push(disability);
            break;
          case 'backLeft':
            backLeftDisability.push(disability);
            break;
          case 'backRight':
            backRightDisability.push(disability);
            break;
        }
      });

      // console.log('frontLeftDisability', frontLeftDisability);
      // console.log('frontRightDisability', frontRightDisability);
      // console.log('backLeftDisability', backLeftDisability);
      // console.log('backRightDisability', backRightDisability);

      return (
        <View style={styles.disabilities}>
          <View style={styles.pawsRow}>
            <Card style={styles.disabledPaw}>
              <PawImage pawName="frontLeft" pawData={frontLeftDisability} />
            </Card>
            <Card style={styles.disabledPaw}>
              <PawImage pawName="frontRight" pawData={frontRightDisability} />
            </Card>
          </View>
          <View style={styles.pawsRow}>
            <Card style={styles.disabledPaw}>
              <PawImage pawName="backLeft" pawData={backLeftDisability} />
            </Card>
            <Card style={styles.disabledPaw}>
              <PawImage pawName="backRight" pawData={backRightDisability} />
            </Card>
          </View>
        </View>
      )
    }
  }

  return (
    <ScrollView contentContainerStyle={{}}>
      <Image source={{ uri: selectedPet.imageUri }} style={styles.image} />
      <Card style={styles.card}>
        <View>
          <Text>{selectedPet.breed}</Text>
        </View>
      </Card>
      {
        selectedPet.disabled && displayPetDisabilities()
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
  },
  disabilities: {
  },
  pawsRow: {
    flexDirection: 'row',
  },
  disabledPaw: {
    flex: 1,
  },
});

export default PetDetailScreen;