import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import NewSessionItem from '../components/NewSessionItem';
import ScreenTitle from '../components/ScreenTitle';
import EmptyList from '../components/EmptyList';
import * as animalsActions from '../redux/actions/animals';
import * as sessionActions from '../redux/actions/session';
import Colors from '../constants/Colors';

const HomeScreen = (props) => {
  const dispatch = useDispatch();
  const animals = useSelector(state => state.animals.animals);

  useEffect(() => {
    dispatch(animalsActions.loadAnimals());
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
        data={animals}
        keyExtractor={item => item.id}
        renderItem={itemData => <NewSessionItem animalData={itemData.item} onSelect={() => {
          dispatch(sessionActions.updateNewSessionPetId(itemData.item.id));

          // TODO: check from which paw to start - if front left disabled start from front right etc.
          props.navigation.navigate('NewSession', { screen: 'Paws', params: { screen: 'FrontLeftPaw', params: { screen: 'FrontLeftPawChecker' } } });
        }} />}
        ListEmptyComponent={() => (<EmptyList text="You haven't added any animals yet">
          <View style={{ marginTop: 10 }}>
            <Button
              onPress={() => props.navigation.navigate('Animals', { screen: 'AddNewAnimal' })}
              title="Add new animal"
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