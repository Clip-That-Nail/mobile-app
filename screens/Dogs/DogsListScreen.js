import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import HeaderButton from '../../components/HeaderButton';
import DogItem from '../../components/DogItem';
import ScreenTitle from '../../components/ScreenTitle';
import ScreenActionButtons from '../../components/ScreenActionButtons';
import * as dogsActions from '../../redux/actions/dogs';

const DogsListScreen = (props) => {
  const dispatch = useDispatch();
  const dogs = useSelector(state => state.dogs.dogs);

  useEffect(() => {
    dispatch(dogsActions.loadDogs());
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
          onPress: () => props.navigation.navigate('AddNewDog')
        },
        {
          text: 'Stats',
          icon: <Ionicons name="stats-chart" size={30} color="black" />,
          onPress: () => {}
        },
      ]} />
      <View style={styles.listTitleContainer}>
        <Text style={styles.listTitle}>
          Your Animals
        </Text>
      </View>
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
    headerShown: true,
    headerTransparent: true,
    // headerTitle: 'Your Doggos',
    // headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
    //   <Item title="Add new doggo" iconName='add' onPress={() => {
    //     navData.navigation.navigate('AddNewDog');
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
});

export default DogsListScreen;