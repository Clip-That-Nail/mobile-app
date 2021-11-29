import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import SessionItem from '../../components/SessionItem';
import ScreenTitle from '../../components/titles/ScreenTitle';
import ScreenActionButtons from '../../components/ScreenActionButtons';
import EmptyList from '../../components/EmptyList';
import { loadSessions } from '../../redux/actions/sessions';
import { prepareEditSession } from '../../redux/actions/newSession';

const SessionsListScreen = (props) => {
  const dispatch = useDispatch();
  const sessions = useSelector(state => state.sessions.sessions);

  useEffect(() => {
    dispatch(loadSessions());
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['white', 'transparent']}
        locations={[0.05, 0.3]}
        style={styles.background}
      />
      <ScreenTitle title="Sessions" />
      <ScreenActionButtons buttonsData={[
        {
          text: 'Stats',
          icon: <Ionicons name="stats-chart" size={30} color="black" />,
          onPress: () => { }
        },
      ]} />
      <View style={styles.listTitleContainer}>
        <Text style={styles.listTitle}>
          All Sessions
        </Text>
      </View>
      {/* TODO: create component for lists because you are using it in a few places : CustomList or CustomFlatList */}
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={sessions}
        keyExtractor={item => item.id}
        renderItem={itemData => <SessionItem session={itemData.item} onSelect={() => {
          if (itemData.item.status === 'unfinished') {
            dispatch(prepareEditSession(itemData.item));
            props.navigation.navigate('NewSession', { screen: 'Paws', params: { screen: 'FrontLeftPaw', params: { screen: 'FrontLeftPawChecker', params: { session: itemData.item } } } });
          } else {
            props.navigation.navigate('SessionDetail', { sessionId: itemData.item.id, sessionCreateDate: itemData.item.createDate });
          }
        }} />}
        ListEmptyComponent={() => <EmptyList text="You haven't added any sessions yet" />}
      />
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerShown: true,
    headerTransparent: true,
    // headerTitle: 'All Sessions',
  };
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
    flex: 1,
    width: '100%',
  },
  listContent: {
    paddingBottom: 10,
  },
});

export default SessionsListScreen;