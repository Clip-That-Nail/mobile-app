import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import SessionItem from '../../components/SessionItem';
import { loadSessions } from '../../redux/actions/sessions';

const SessionsListScreen = (props) => {
  const dispatch = useDispatch();
  const sessions = useSelector(state => state.sessions.sessions);

  useEffect(() => {
    dispatch(loadSessions());
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ marginTop: 7.5 }}
        data={sessions}
        keyExtractor={item => item.id}
        renderItem={itemData => <SessionItem session={itemData.item} onSelect={() => {
          props.navigation.navigate('SessionDetail', { sessionId: itemData.item.id, sessionCreateDate: itemData.item.createDate });
        }} />}
      />
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'All Sessions',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  }
});

export default SessionsListScreen;