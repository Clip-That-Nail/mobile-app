import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Colors from '../../constants/Colors';

const SessionDetailScreen = (props) => {
  const sessionId = props.route.params.sessionId;
  const selectedSession = useSelector(state => state.sessions.sessions.find(session => session.id === sessionId));

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
      <View style={styles.pawContainer}>
        <Text style={styles.paw}>{JSON.stringify(selectedSession.frontLeft)}</Text>
      </View>
      <View style={styles.pawContainer}>
        <Text style={styles.paw}>{JSON.stringify(selectedSession.frontRight)}</Text>
      </View>
      <View style={styles.pawContainer}>
        <Text style={styles.paw}>{JSON.stringify(selectedSession.backLeft)}</Text>
      </View>
      <View style={styles.pawContainer}>
        <Text style={styles.paw}>{JSON.stringify(selectedSession.backRight)}</Text>
      </View>
    </ScrollView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: navData.route.params.dogName,
  }
};

const styles = StyleSheet.create({
  pawContainer: {
    marginVertical: 20,
    width: '90%',
    maxWidth: 350,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10
  },
  paw: {
    padding: 20,
  }
});

export default SessionDetailScreen;