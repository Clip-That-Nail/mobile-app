import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton';
import ImagePicker from '../../components/ImagePicker';

import Colors from '../../constants/Colors';

const AddNewDogScreen = (props) => {
  const dispatch = useDispatch();
  const [dogName, setDogName] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const dogNameChangeHandler = (event) => {
    setDogName(event.nativeEvent.text);
  };

  const imageTakenHandler = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const saveDoggoHandler = () => {
    // dispatch(placesActions.addPlace(titleValue, selectedImage, selectedLocation));
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Dog Name</Text>
        <TextInput style={styles.textInput} onChange={dogNameChangeHandler} value={dogName} />
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