import React from 'react';
import { StyleSheet, View } from 'react-native';

import Card from '../Card';
import PawImage from '../PawImage';
import BoxTitle from '../titles/BoxTitle';

const PetDisability = ({ disabilities }) => (
  <Card style={styles.disabilities}>
    <BoxTitle title="Disabled Claws" />
    <View style={styles.pawsRow}>
      <View style={styles.disabledPaw}>
        <PawImage pawName="frontLeft" pawData={disabilities.frontLeft} />
      </View>
      <View style={styles.disabledPaw}>
        <PawImage pawName="frontRight" pawData={disabilities.frontRight} />
      </View>
    </View>
    <View style={styles.pawsRow}>
      <View style={styles.disabledPaw}>
        <PawImage pawName="backLeft" pawData={disabilities.backLeft} />
      </View>
      <View style={styles.disabledPaw}>
        <PawImage pawName="backRight" pawData={disabilities.backRight} />
      </View>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  disabilities: {
  },
  titleContainer: {
    marginBottom: 10,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 18,
    color: '#333'
  },
  pawsRow: {
    flexDirection: 'row',
  },
  disabledPaw: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default PetDisability;