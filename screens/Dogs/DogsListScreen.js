import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton';
import DogItem from '../../components/DogItem';
import * as dogsActions from '../../redux/actions/dogs';

const DogsListScreen = (props) => {
  const dispatch = useDispatch();
  const dogs = useSelector(state => state.dogs.dogs);

  useEffect(() => {
    dispatch(dogsActions.loadDogs());
  }, [dispatch]);

  return (
    <View>
      <FlatList
        data={dogs}
        keyExtractor={item => item.id}
        renderItem={itemData => <DogItem image={itemData.item.imageUri} name={itemData.item.name} breed={itemData.item.breed} onSelect={() => {
          props.navigation.navigate('DogDetail', { dogName: itemData.item.name, dogId: itemData.item.id });
        }} />}
      />
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'Your Doggos',
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Add new doggo" iconName='add' onPress={() => {
        navData.navigation.navigate('AddNewDog');
      }} />
    </HeaderButtons>)
  };
};

const styles = StyleSheet.create({});

export default DogsListScreen;