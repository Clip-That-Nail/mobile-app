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
import DisabilityPaw from '../../components/DisabilityPaw';

import * as petsActions from '../../redux/actions/pets';

import { pawsData } from '../../helpers/pawsData';
import Colors from '../../constants/Colors';

const AddNewPetScreen = (props) => {
  const dispatch = useDispatch();
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('dog');
  const [petBreed, setPetBreed] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [petDisabled, setPetDisabled] = useState(false);
  const [disabledClaws, setDisabledClaws] = useState({
    frontLeft: {
      first: 'unchecked',
      second: 'unchecked',
      third: 'unchecked',
      fourth: 'unchecked',
      dew: 'unchecked',
    },
    frontRight: {
      first: 'unchecked',
      second: 'unchecked',
      third: 'unchecked',
      fourth: 'unchecked',
      dew: 'unchecked',
    },
    backLeft: {
      first: 'unchecked',
      second: 'unchecked',
      third: 'unchecked',
      fourth: 'unchecked',
    },
    backRight: {
      first: 'unchecked',
      second: 'unchecked',
      third: 'unchecked',
      fourth: 'unchecked',
    }
  });

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

  const savePetHandler = () => {
    dispatch(petsActions.addPet(petName, petType, petBreed, selectedImage, petDisabled ? 1 : 0));
    props.navigation.goBack();
  };

  const handleClawCheckboxPress = (pawId, clawId, status) => {
    // console.log('status', status);
    // console.log('pawId', pawId);
    // console.log('clawId', clawId);
    setDisabledClaws({ ...disabledClaws, [pawId]: { ...disabledClaws[pawId], [clawId]: status } });
  };

  console.log('disabledClaws', disabledClaws);

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
        <ImagePicker onImageTaken={imageTakenHandler} />
        <View style={styles.checkboxContainer}>{/* TODO: move it to the seperate component : CustomCheckbox */}
          <CheckBox
            value={petDisabled}
            onValueChange={setPetDisabled}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Disabled?</Text>
        </View>
        {
          petDisabled && (
            <View style={styles.disablePawsContainer}>
              <Text style={styles.label}>Choose which claw is disabled and can't be cut</Text>
              <DisabilityPaw pawData={pawsData.frontLeft} claws={disabledClaws.frontLeft} onClawCheckboxPress={handleClawCheckboxPress} />
              <DisabilityPaw pawData={pawsData.frontRight} claws={disabledClaws.frontRight} onClawCheckboxPress={handleClawCheckboxPress} />
              <DisabilityPaw pawData={pawsData.backLeft} claws={disabledClaws.backLeft} onClawCheckboxPress={handleClawCheckboxPress} />
              <DisabilityPaw pawData={pawsData.backRight} claws={disabledClaws.backRight} onClawCheckboxPress={handleClawCheckboxPress} />
            </View>
          )
        }
        <Button style={styles.button} icon="paw" mode="contained" color={Colors.redDarkColor} onPress={savePetHandler}>
          Save Pet
        </Button>
      </View>
    </ScrollView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'Add New Pet',
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Save pet" iconName='checkmark' onPress={() => {
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
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  disablePawsContainer: {
    marginBottom: 10,
  }
});

export default AddNewPetScreen;