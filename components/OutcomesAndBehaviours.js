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
    disabled: { bg: '#999999', text: Colors.white },
    checked: { bg: Colors.greenColor, text: Colors.white },
    bleeded: { bg: Colors.redColor, text: Colors.white },
    warning: { bg: Colors.yellowColor, text: Colors.black },
  };

  return (
    <View style={styles.outcomesAndBehaviours}>
      {
        Object.keys(pawData.claws).map((clawData) => (
          <View style={styles.clawRow} key={pawData.claws[clawData].id}>
            <View style={{ ...styles.clawContainer, backgroundColor: clawColor[statuses[pawData.claws[clawData].id]]?.bg }}>
              <Text style={{ ...styles.clawText, color: clawColor[statuses[pawData.claws[clawData].id]]?.text }}>
                {pawData.claws[clawData].shortName}
              </Text>
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
    width: 44,
    height: 44,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  clawText: {
    fontSize: 20
  },
  imageContainer: {
    margin: 2,
  },
});

export default OutcomesAndBehaviours;