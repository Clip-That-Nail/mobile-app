import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Card from '../../components/Card';
import PawImage from '../../components/PawImage';
import BehaviourImage from '../../components/BehaviourImage';
import OutcomeImage from '../../components/OutcomeImage';
import OutcomesAndBehaviours from '../../components/OutcomesAndBehaviours';
import Colors from '../../constants/Colors';
import { pawsData } from '../../helpers/pawsData';
import { prepareSessionData } from '../../helpers/session';

const EMPTY_PAWS_DATA = {
  frontLeft: {},
  frontRight: {},
  backLeft: {},
  backRight: {},
};

const SessionDetailScreen = (props) => {
  const sessionId = props.route.params.sessionId;
  const selectedSession = useSelector(state => state.sessions.sessions.find(session => session.id === sessionId));
  const sessionPet = useSelector(state => state.pets.pets.find(pet => pet.id === selectedSession?.pet?.id));

  const [statuses, setStatuses] = useState(EMPTY_PAWS_DATA);
  const [behaviours, setBehaviours] = useState(EMPTY_PAWS_DATA);
  const [outcomes, setOutcomes] = useState(EMPTY_PAWS_DATA);

  useEffect(() => {
    const [preparedStatuses, preparedBehaviours, preparedOutcomes] = prepareSessionData(selectedSession, sessionPet.disabilities);
    setStatuses(preparedStatuses);
    setBehaviours(preparedBehaviours);
    setOutcomes(preparedOutcomes);
  }, [selectedSession, sessionPet]);

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
      <Card style={styles.dog}>
        {/* TODO: add Dog details box */}
        <Text style={styles.dogName}>{selectedSession?.pet?.name}</Text>
      </Card>
      <View style={styles.pawsRow}>
        <Card style={styles.paw}>
          <Text style={styles.pawTitle}>Front Left</Text>
          <PawImage pawName="frontLeft" pawData={statuses?.frontLeft} />
          <OutcomesAndBehaviours pawData={pawsData["frontLeft"]} statuses={statuses?.frontLeft} outcomes={outcomes?.frontLeft} behaviours={behaviours?.frontLeft} />
        </Card>
        <Card style={styles.paw}>
          <Text style={styles.pawTitle}>Front Right</Text>
          <PawImage pawName="frontRight" pawData={statuses?.frontRight} />
          <OutcomesAndBehaviours pawData={pawsData["frontRight"]} statuses={statuses?.frontRight} outcomes={outcomes?.frontRight} behaviours={behaviours?.frontRight} />
        </Card>
      </View>
      <View style={styles.pawsRow}>
        <Card style={styles.paw}>
          <Text style={styles.pawTitle}>Back Left</Text>
          <PawImage pawName="backLeft" pawData={statuses?.backLeft} />
          <OutcomesAndBehaviours pawData={pawsData["backLeft"]} statuses={statuses?.backLeft} outcomes={outcomes?.backLeft} behaviours={behaviours?.backLeft} />
        </Card>
        <Card style={styles.paw}>
          <Text style={styles.pawTitle}>Back Right</Text>
          <PawImage pawName="backRight" pawData={statuses?.backRight} />
          <OutcomesAndBehaviours pawData={pawsData["backRight"]} statuses={statuses?.backRight} outcomes={outcomes?.backRight} behaviours={behaviours?.backRight} />
        </Card>
      </View>
    </ScrollView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: navData.route.params.sessionCreateDate,
  }
};

const styles = StyleSheet.create({
  dog: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  dogName: {},
  pawTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 15,
  },
  pawsRow: {
    flexDirection: 'row',
  },
  paw: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  claw: {
    padding: 15,
  }
});

export default SessionDetailScreen;