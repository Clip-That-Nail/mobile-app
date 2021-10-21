import React from 'react';
import { StyleSheet, View } from 'react-native';

import DisabilityCheckbox from './DisabilityCheckbox';

const DisabilityPaw = ({ pawData, claws, onClawCheckboxPress }) => {
  const clawsArray = Object.keys(pawData.claws);
  // console.log('pawData', pawData);
  // console.log('clawsArray', clawsArray);

  return (
    <View style={styles.disablePawsContainer}>
      {
        clawsArray.map(claw => (
          <DisabilityCheckbox
            key={pawData.claws[claw].id}
            initialStatus={claws[pawData.claws[claw].id]}
            badgeText={pawData.claws[claw].shortName}
            onPress={(state) => onClawCheckboxPress(pawData.id, pawData.claws[claw].id, state)}
          />
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  disablePawsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  }
});

export default DisabilityPaw;