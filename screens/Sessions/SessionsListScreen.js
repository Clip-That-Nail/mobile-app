import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import { loadSessions } from '../../redux/actions/sessions';

const SessionsListScreen = (props) => {
  const dispatch = useDispatch();
  const sessions = useSelector(state => state.sessions.sessions);

  // console.log('sessions', sessions);

  useEffect(() => {
    dispatch(loadSessions());
  }, [dispatch]);

  return (
    <View>
      <FlatList
        data={sessions}
        keyExtractor={item => item.id}
        renderItem={itemData => <Text>Session: {JSON.stringify(itemData.item)}</Text>}
      />
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'All Sessions',
  };
};

const styles = StyleSheet.create({});

export default SessionsListScreen;