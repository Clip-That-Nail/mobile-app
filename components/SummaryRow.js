import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import SummarySpecialIcon from './SummarySpecialIcon';
import SummaryPicker from '../components/SummaryPicker';
import OutcomeImage from '../components/OutcomeImage';
import BehaviourImage from '../components/BehaviourImage';

const SummaryRow = (props) => {
  const { claw, onOutcomeChange, onBehaviourChange } = props;

  const handleOnOutcomeChange = (outcomeId) => {
    onOutcomeChange(claw.id, outcomeId);
  };

  const handleOnBehaviourChange = (behaviourId) => {
    onBehaviourChange(claw.id, behaviourId);
  };

  return (
    <View style={styles.listItemsContainer}>
      <View style={{ ...styles.summaryRow, justifyContent: 'space-between' }}>
        <View style={{ ...styles.summaryRow }}>
          <SummarySpecialIcon status={claw.status} />
          <View style={styles.itemText}>
            <Text>{claw.text}</Text>
          </View>
        </View>
        <View style={{ ...styles.summaryRow, justifyContent: 'center' }}>
          <View style={{ marginLeft: 5 }}>
            <OutcomeImage size={26} status={claw.status} outcome={claw.outcome} />
          </View>
          <View style={{ marginLeft: 5 }}>
            <BehaviourImage size={26} behaviour={claw.behaviour} />
          </View>
        </View>
      </View>
      <View style={styles.summaryRow}>
        <SummaryPicker
          value={claw.outcome}
          type='outcome'
          status={claw.status}
          onValueChange={handleOnOutcomeChange}
        />
      </View>
      <View style={styles.summaryRow}>
        <SummaryPicker
          value={claw.behaviour}
          type='futureBehaviour'
          onValueChange={handleOnBehaviourChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 5,
  },
  listItemsContainer: {
    paddingBottom: 5,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb'
  },
  itemText: {
    marginLeft: 10
  }
});

export default SummaryRow;