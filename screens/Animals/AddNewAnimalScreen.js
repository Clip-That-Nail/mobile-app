import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';

import HeaderButton from '../../components/HeaderButton';
import ImagePicker from '../../components/ImagePicker';

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
        <Text style={styles.label}>Animal Name</Text>
        <TextInput style={styles.textInput} onChange={animalNameChangeHandler} value={animalName} placeholder="Animal Name" />
        <Text style={styles.label}>Type</Text>
        <View style={styles.animalPicker}>
          <Picker
            selectedValue={animalType}
            onValueChange={animalTypeChangeHandler}>
            <Picker.Item label="Dog" value="dog" key="dog" />
            <Picker.Item label="Cat" value="cat" key="cat" />
          </Picker>
        </View>
        <Text style={styles.label}>Breed</Text>
        <TextInput style={styles.textInput} onChange={animalBreedChangeHandler} value={animalBreed} />
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
    // alignItems: 'center',
    // justifyContent: 'center',
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
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  },
  animalPicker: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
  }
});

export default AddNewAnimalScreen;