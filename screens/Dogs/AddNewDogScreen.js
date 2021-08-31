import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton';
import ImagePicker from '../../components/ImagePicker';

import * as dogsActions from '../../redux/actions/dogs';

import Colors from '../../constants/Colors';

const AddNewDogScreen = (props) => {
  const dispatch = useDispatch();
  const [dogName, setDogName] = useState('');
  const [dogBreed, setDogBreed] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const dogNameChangeHandler = (event) => {
    setDogName(event.nativeEvent.text);
  };

  const dogBreedChangeHandler = (event) => {
    setDogBreed(event.nativeEvent.text);
  };

  const imageTakenHandler = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const saveDoggoHandler = () => {
    dispatch(dogsActions.addDog(dogName, dogBreed, selectedImage));
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Dog Name</Text>
        <TextInput style={styles.textInput} onChange={dogNameChangeHandler} value={dogName} placeholder="Dog Name" />
        <Text style={styles.label}>Breed</Text>
        <TextInput style={styles.textInput} onChange={dogBreedChangeHandler} value={dogBreed} />
        <ImagePicker onImageTaken={imageTakenHandler} />
        <Button title="Save Doggo" color={Colors.redColor} onPress={saveDoggoHandler} />
      </View>
    </ScrollView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'Add New Dog',
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Save doggo" iconName='checkmark' onPress={() => {
        navData.navigation.navigate('DogsList');
      }} />
    </HeaderButtons>)
  };
};

const styles = StyleSheet.create({
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
});

export default AddNewDogScreen;