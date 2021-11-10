import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import BehaviourImage from './BehaviourImage';
import OutcomeImage from './OutcomeImage';

import Colors from '../constants/Colors';

const OutcomesAndBehaviours = ({ pawData, statuses, outcomes, behaviours }) => {
  // console.log('pawData', pawData.claws);
  // console.log('statuses', statuses);
  // console.log('outcomes', outcomes);
  // console.log('behaviours', behaviours);

  const clawColor = {
    disabled: '#444',
    checked: Colors.greenColor,
    bleeded: Colors.redColor,
    warning: Colors.yellowColor,
  };

  return (
    <View style={styles.outcomesAndBehaviours}>
      {
        Object.keys(pawData.claws).map((clawData) => (
          <View style={styles.clawRow}>
            <View style={{ ...styles.clawContainer, backgroundColor: clawColor[statuses[pawData.claws[clawData].id]] }}>
              <Text style={styles.clawText}>{pawData.claws[clawData].shortName}</Text>
            </View>
            <View style={styles.imageContainer}>
              <OutcomeImage size={40} status={statuses[pawData.claws[clawData].id]} outcome={outcomes[pawData.claws[clawData].id]} />
            </View>
            <View style={styles.imageContainer}>
              <BehaviourImage size={40} behaviour={behaviours[pawData.claws[clawData].id]} />
            </View>
          </View>
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  outcomesAndBehaviours: {
  },
  clawRow: {
    flexDirection: 'row'
  },
  clawContainer: {
    width: 40,
    height: 40,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clawText: {
    fontSize: 20
  },
  imageContainer: {
    margin: 2,
  },
});

export default OutcomesAndBehaviours;