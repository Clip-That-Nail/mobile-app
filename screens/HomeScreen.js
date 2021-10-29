import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import NewSessionItem from '../components/NewSessionItem';
import ScreenTitle from '../components/titles/ScreenTitle';
import EmptyList from '../components/EmptyList';
import * as petsActions from '../redux/actions/pets';
import * as newSessionActions from '../redux/actions/newSession';
import Colors from '../constants/Colors';

const HomeScreen = (props) => {
  const dispatch = useDispatch();
  const pets = useSelector(state => state.pets.pets);

  useEffect(() => {
    dispatch(petsActions.loadPets());
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['white', 'transparent']}
        locations={[0.05, 0.3]}
        style={styles.background}
      />
      <ScreenTitle title="Clip That Nail" />

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={pets}
        keyExtractor={item => item.id}
        renderItem={itemData => <NewSessionItem petData={itemData.item} onSelect={() => {
          dispatch(newSessionActions.updateNewSessionPetId(itemData.item.id));

          // TODO: check from which paw to start - if front left disabled start from front right etc.
          props.navigation.navigate('NewSession', { screen: 'Paws', params: { screen: 'FrontLeftPaw', params: { screen: 'FrontLeftPawChecker' } } });
        }} />}
        ListEmptyComponent={() => (<EmptyList text="You haven't added any pets yet">
          <View style={{ marginTop: 10 }}>
            <Button
              onPress={() => props.navigation.navigate('Pets', { screen: 'AddNewPet' })}
              title="Add new pet"
              color={Colors.greenDarkColor}
            />
          </View>
        </EmptyList>)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
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
  list: {
    flex: 1,
    width: '100%',
  },
  listContent: {
    paddingBottom: 10,
  },
});

export default HomeScreen;