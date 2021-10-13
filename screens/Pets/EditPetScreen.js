import React, { useState } from 'react';
import { StyleSheet, View, Text, CheckBox, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-paper';

import HeaderButton from '../../components/HeaderButton';
import ImagePicker from '../../components/ImagePicker';
import CustomInput from '../../components/CustomInput';
import CustomPicker from '../../components/CustomPicker';

import * as petsActions from '../../redux/actions/pets';

import Colors from '../../constants/Colors';

const EditPetScreen = (props) => {
  const petData = props.route.params.petData;
  const [petName, setPetName] = useState(petData.name);
  const [petType, setPetType] = useState(petData.type);
  const [petBreed, setPetBreed] = useState(petData.breed);
  const [petDisabled, setPetDisabled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(petData.imageUri);

  const dispatch = useDispatch();

  const petNameChangeHandler = (event) => {
    setPetName(event.nativeEvent.text);
  };

  const petTypeChangeHandler = (itemValue, itemIndex) => {
    setPetType(itemValue);
  };

  const petBreedChangeHandler = (event) => {
    setPetBreed(event.nativeEvent.text);
  };

  const imageTakenHandler = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const updatePetHandler = () => {
    dispatch(petsActions.updatePet(petData.id, petName, petType, petBreed, { new: selectedImage, old: petData.imageUri }));
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
        <CustomInput label="Name" placeholder="Type pet name" value={petName} handleChange={petNameChangeHandler} />
        <CustomPicker label="Type" value={petType} handleChange={petTypeChangeHandler} options={[
          { label: "Dog", value: "dog" },
          { label: "Cat", value: "cat" },
        ]} />
        <CustomInput label="Breed" placeholder="Type pet breed" value={petBreed} handleChange={petBreedChangeHandler} />
        <ImagePicker initialImage={petData.imageUri} onImageTaken={imageTakenHandler} />
        <View style={styles.checkboxContainer}>{/* TODO: move it to the seperate component : CustomCheckbox */}
          <CheckBox
            value={petDisabled}
            onValueChange={setPetDisabled}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Disabled?</Text>
        </View>
        <Button style={styles.button} icon="paw" mode="contained" color={Colors.redDarkColor} onPress={updatePetHandler}>
          Update Pet
        </Button>
      </View>
    </ScrollView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'Edit Pet',
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Update pet" iconName='checkmark' onPress={() => {
        navData.navigation.navigate('PetsList');
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
  button: {
    borderRadius: 20,
    fontSize: 18,
    paddingVertical: 5
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default EditPetScreen;