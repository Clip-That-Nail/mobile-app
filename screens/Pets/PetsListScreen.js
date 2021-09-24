import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import PetItem from '../../components/PetItem';
import ScreenTitle from '../../components/ScreenTitle';
import ScreenActionButtons from '../../components/ScreenActionButtons';
import EmptyList from '../../components/EmptyList';
import * as petsActions from '../../redux/actions/pets';

const PetsListScreen = (props) => {
  const dispatch = useDispatch();
  const pets = useSelector(state => state.pets.pets);

  useEffect(() => {
    dispatch(petsActions.loadPets());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['white', 'transparent']}
        locations={[0.05, 0.3]}
        style={styles.background}
      />
      <ScreenTitle title="Pets" />
      <ScreenActionButtons buttonsData={[
        {
          text: 'Add',
          icon: <Ionicons name="add" size={30} color="black" />,
          onPress: () => props.navigation.navigate('AddNewPet')
        },
        {
          text: 'Stats',
          icon: <Ionicons name="stats-chart" size={30} color="black" />,
          onPress: () => { }
        },
      ]} />
      <View style={styles.listTitleContainer}>
        <Text style={styles.listTitle}>
          Your Pets
        </Text>
      </View>
      {/* TODO: create component for lists because you are using it in a few places : CustomList or CustomFlatList */}
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={pets}
        keyExtractor={item => item.id}
        renderItem={itemData => <PetItem petData={itemData.item} onSelect={() => {
          props.navigation.navigate('PetDetail', { petName: itemData.item.name, petId: itemData.item.id });
        }} />}
        ListEmptyComponent={() => <EmptyList text="You haven't added any pets yet" />}
      />
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerShown: true,
    headerTransparent: true,
    // headerTitle: 'Your Pets',
    // headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
    //   <Item title="Add new pet" iconName='add' onPress={() => {
    //     navData.navigation.navigate('AddNewPet');
    //   }} />
    // </HeaderButtons>)
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eff1f5',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  listTitleContainer: {
    width: '100%',
    textAlign: 'left',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#555"
  },
  list: {
    flex: 1,
    width: '100%',
  },
  listContent: {
    paddingBottom: 10,
  },
});

export default PetsListScreen;