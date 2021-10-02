import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Card from '../../components/Card';
import Colors from '../../constants/Colors';

const SessionDetailScreen = (props) => {
  const sessionId = props.route.params.sessionId;
  const selectedSession = useSelector(state => state.sessions.sessions.find(session => session.id === sessionId));

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
      <Card style={styles.dog}>
        {/* TODO: add Dog details box */}
        <Text style={styles.dogName}>{selectedSession.pet.name}</Text>
      </Card>
      <Card style={styles.paw}>
        {/* TODO: przedstaw clawsy i outcomesy/behavioursy jako kwadraty/prostokaty/boxy z grafika latwa do zapamietania/zrozumienia i jak na to klikniesz to wyswietla sie popup z nazwa/wytlumaczeniem co to */}
        <Text style={styles.claw}>{JSON.stringify(selectedSession.frontLeft.firstClaw)}</Text>
        <Text style={styles.claw}>{JSON.stringify(selectedSession.frontLeft.secondClaw)}</Text>
        <Text style={styles.claw}>{JSON.stringify(selectedSession.frontLeft.thirdClaw)}</Text>
        <Text style={styles.claw}>{JSON.stringify(selectedSession.frontLeft.fourthClaw)}</Text>
        <Text style={styles.claw}>{JSON.stringify(selectedSession.frontLeft.dewClaw)}</Text>
      </Card>
      <Card style={styles.paw}>
        <Text style={styles.claw}>{JSON.stringify(selectedSession.frontRight.firstClaw)}</Text>
        <Text style={styles.claw}>{JSON.stringify(selectedSession.frontRight.secondClaw)}</Text>
        <Text style={styles.claw}>{JSON.stringify(selectedSession.frontRight.thirdClaw)}</Text>
        <Text style={styles.claw}>{JSON.stringify(selectedSession.frontRight.fourthClaw)}</Text>
        <Text style={styles.claw}>{JSON.stringify(selectedSession.frontRight.dewClaw)}</Text>
      </Card>
      <Card style={styles.paw}>
        <Text style={styles.claw}>{JSON.stringify(selectedSession.backLeft.firstClaw)}</Text>
        <Text style={styles.claw}>{JSON.stringify(selectedSession.backLeft.secondClaw)}</Text>
        <Text style={styles.claw}>{JSON.stringify(selectedSession.backLeft.thirdClaw)}</Text>
        <Text style={styles.claw}>{JSON.stringify(selectedSession.backLeft.fourthClaw)}</Text>
      </Card>
      <Card style={styles.paw}>
        <Text style={styles.claw}>{JSON.stringify(selectedSession.backRight.firstClaw)}</Text>
        <Text style={styles.claw}>{JSON.stringify(selectedSession.backRight.secondClaw)}</Text>
        <Text style={styles.claw}>{JSON.stringify(selectedSession.backRight.thirdClaw)}</Text>
        <Text style={styles.claw}>{JSON.stringify(selectedSession.backRight.fourthClaw)}</Text>
      </Card>
    </ScrollView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: navData.route.params.sessionCreateDate,
  }
};

const styles = StyleSheet.create({
  dog: {},
  dogName: {},
  paw: {
  },
  claw: {
    padding: 15,
  }
});

export default SessionDetailScreen;