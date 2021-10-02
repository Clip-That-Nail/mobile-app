import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Ionicons, Entypo } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import ListItem from './ListItem';
import CircleActionButton from './CircleActionButton';
import Colors from '../constants/Colors';

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

  const handleOnPressLeftAction = () => {
    alert('edit');
  };

  const handleOnPressRightAction = () => {
    alert('remove');
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
          <View style={styles.petType}>
            <MaterialCommunityIcons name={props.petData.type} size={18} color="rgba(0,0,0,0.6)" />
          </View>
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
  petType: {
    position: 'absolute',
    bottom: 3,
    right: 3,
    width: 20,
    height: 20,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3
  },
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
