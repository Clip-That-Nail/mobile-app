import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import NewSessionItem from '../components/NewSessionItem';
import ScreenTitle from '../components/ScreenTitle';
import * as animalsActions from '../redux/actions/animals';

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
          props.navigation.navigate('NewSession', { animalId: itemData.item.id }, CommonActions.navigate('PreNewSession'));
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