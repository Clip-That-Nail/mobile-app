import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Alert } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import ListItem from './ListItem';
import CircleActionButton from './CircleActionButton';
import Colors from '../constants/Colors';
import PetBadge from '../components/PetBadge';
import { removePet } from '../redux/actions/pets';

const leftSwipeActions = (onPress) => {
  return (
    <CircleActionButton side="left" buttonSize={50} buttonType="edit" onPress={onPress}>
      <Entypo name="edit" size={26} color="white" />
    </CircleActionButton>
  );
};

const rightSwipeActions = (onPress) => {
  return (
    <CircleActionButton side="right" buttonSize={50} buttonType="remove" onPress={onPress}>
      <Ionicons name="trash-outline" size={26} color="white" />
    </CircleActionButton>
  );
};

const PetItem = props => {
  const dispatch = useDispatch();

  const handleOnPressLeftAction = () => {
    props.navigation.navigate('EditPet', { petData: props.petData });
  };

  const handleOnPressRightAction = () => {
    Alert.alert('Are you sure?', 'Do you really want to remove this pet?', [
      { text: 'No', style: 'default' },
      {
        text: "Yes", style: 'destructive', onPress: () => {
          dispatch(removePet(props.petData.id));
          // TODO: find out how to close swiped item after deleting pet - some close() function?
        }
      }
    ]);
  };

  return (
    <Swipeable
      renderLeftActions={() => leftSwipeActions(handleOnPressLeftAction)}
      renderRightActions={() => rightSwipeActions(handleOnPressRightAction)}
    // onSwipeableRightOpen={swipeFromRightOpen}
    // onSwipeableLeftOpen={swipeFromLeftOpen}
    >
      <ListItem onSelect={props.onSelect}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.petData.imageUri }} />
          <PetBadge icon={props.petData.type} size={20} position={{ bottom: 3, right: 3 }} color={{ badge: "rgba(255,255,255,0.6)", icon: "rgba(0,0,0,0.6)" }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{props.petData.name}</Text>
          <Text style={styles.breed}>{props.petData.breed}</Text>
        </View>
      </ListItem>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: '#ccc',
    borderColor: Colors.primary,
    borderWidth: 1
  },
  infoContainer: {
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  name: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5
  },
  breed: {
    color: '#666',
    fontSize: 16
  }
});

export default PetItem;
