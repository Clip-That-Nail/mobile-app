import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import AnimalItem from '../../components/AnimalItem';
import ScreenTitle from '../../components/ScreenTitle';
import ScreenActionButtons from '../../components/ScreenActionButtons';
import * as animalsActions from '../../redux/actions/animals';

const AnimalsListScreen = (props) => {
  const dispatch = useDispatch();
  const animals = useSelector(state => state.animals.animals);

  useEffect(() => {
    dispatch(animalsActions.loadAnimals());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['white', 'transparent']}
        locations={[0.05, 0.3]}
        style={styles.background}
      />
      <ScreenTitle title="Animals" />
      <ScreenActionButtons buttonsData={[
        {
          text: 'Add',
          icon: <Ionicons name="add" size={30} color="black" />,
          onPress: () => props.navigation.navigate('AddNewAnimal')
        },
        {
          text: 'Stats',
          icon: <Ionicons name="stats-chart" size={30} color="black" />,
          onPress: () => { }
        },
      ]} />
      <View style={styles.listTitleContainer}>
        <Text style={styles.listTitle}>
          Your Animals
        </Text>
      </View>
      {/* TODO: create component for lists because you are using it in a few places : CustomList or CustomFlatList */}
      <FlatList
        contentContainerStyle={styles.list}
        data={animals}
        keyExtractor={item => item.id}
        renderItem={itemData => <AnimalItem animalData={itemData.item} onSelect={() => {
          props.navigation.navigate('AnimalDetail', { animalName: itemData.item.name, animalId: itemData.item.id });
        }} />}
        ListEmptyComponent={() => (
          <View style={styles.emptyListContainer}>
            <Text style={styles.emptyListMessage}>You haven't added any animals yet</Text>
          </View>
        )}
      />
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerShown: true,
    headerTransparent: true,
    // headerTitle: 'Your Animals',
    // headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
    //   <Item title="Add new animal" iconName='add' onPress={() => {
    //     navData.navigation.navigate('AddNewAnimal');
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
    paddingVertical: 10
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#555"
  },
  list: {
    paddingBottom: 10
  },
  emptyListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  emptyListMessage: {
    color: '#777',
    fontSize: 13
  }
});

export default AnimalsListScreen;