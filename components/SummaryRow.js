import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import SpecialIcon from '../components/SpecialIcon';
import SummaryPicker from '../components/SummaryPicker';

const FrontLeftPawSummaryScreen = (props) => {
  const { clawText, status } = props;

  return (
    <View style={styles.listItemsContainer}>
      <View style={{ ...styles.summaryRow, justifyContent: 'flex-start' }}>
        <SpecialIcon status={status} />
        <View style={styles.itemText}>
          <Text>{clawText}</Text>
        </View>
      </View>
      <View style={styles.summaryRow}>
        <SummaryPicker type='outcome' status={status} />
      </View>
      <View style={styles.summaryRow}>
        <SummaryPicker type='futureBehaviour' />
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

export default FrontLeftPawSummaryScreen;