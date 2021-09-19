import React, { useState } from 'react';
import { StyleSheet, View, Button, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { LinearGradient } from 'expo-linear-gradient';

import HeaderButton from '../../components/HeaderButton';
import ImagePicker from '../../components/ImagePicker';
import CustomInput from '../../components/CustomInput';
import CustomPicker from '../../components/CustomPicker';

import * as animalsActions from '../../redux/actions/animals';

import Colors from '../../constants/Colors';

const AddNewAnimalScreen = (props) => {
  const dispatch = useDispatch();
  const [animalName, setAnimalName] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [animalBreed, setAnimalBreed] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const animalNameChangeHandler = (event) => {
    setAnimalName(event.nativeEvent.text);
  };

  const animalTypeChangeHandler = (itemValue, itemIndex) => {
    setAnimalType(itemValue);
  };

  const animalBreedChangeHandler = (event) => {
    setAnimalBreed(event.nativeEvent.text);
  };

  const imageTakenHandler = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const saveAnimalHandler = () => {
    dispatch(animalsActions.addAnimal(animalName, animalType, animalBreed, selectedImage));
    props.navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['white', 'transparent']}
        locations={[0.05, 0.3]}
        style={styles.background}
      />
      <View style={styles.form}>
        <CustomInput label="Name" placeholder="Type animal name" value={animalName} handleChange={animalNameChangeHandler} />
        <CustomPicker label="Type" value={animalType} handleChange={animalTypeChangeHandler} options={[
          { label: "Dog", value: "dog" },
          { label: "Cat", value: "cat" },
        ]} />
        <CustomInput label="Breed" placeholder="Type animal breed" value={animalBreed} handleChange={animalBreedChangeHandler} />
        <ImagePicker onImageTaken={imageTakenHandler} />
        <Button title="Save Animal" color={Colors.redColor} onPress={saveAnimalHandler} />
      </View>
    </ScrollView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'Add New Animal',
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Save animal" iconName='checkmark' onPress={() => {
        navData.navigation.navigate('AnimalsList');
      }} />
    </HeaderButtons>)
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff1f5',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  form: {
    margin: 15,
  },
});

export default AddNewAnimalScreen;