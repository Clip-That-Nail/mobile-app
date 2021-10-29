import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Card from '../Card';
import PawImage from '../PawImage';
import BoxTitle from '../titles/BoxTitle';

const PetDisability = ({ disabilities }) => {
  const [frontLeftDisability, setFrontLeftDisability] = useState([]);
  const [frontRightDisability, setFrontRightDisability] = useState([]);
  const [backLeftDisability, setBackLeftDisability] = useState([]);
  const [backRightDisability, setBackRightDisability] = useState([]);

  useEffect(() => {
    if (disabilities.length > 0) {
      disabilities.map(disability => {
        switch (disability.paw) {
          case 'frontLeft':
            setFrontLeftDisability([...frontLeftDisability, disability]);
            break;
          case 'frontRight':
            setFrontRightDisability([...frontRightDisability, disability]);
            break;
          case 'backLeft':
            setBackLeftDisability([...backLeftDisability, disability]);
            break;
          case 'backRight':
            setBackRightDisability([...backRightDisability, disability]);
            break;
        }
      });
    }

  }, [disabilities]);

  return (
    <Card style={styles.disabilities}>
      <BoxTitle title="Disabled Claws" />
      <View style={styles.pawsRow}>
        <View style={styles.disabledPaw}>
          <PawImage pawName="frontLeft" pawData={frontLeftDisability} />
        </View>
        <View style={styles.disabledPaw}>
          <PawImage pawName="frontRight" pawData={frontRightDisability} />
        </View>
      </View>
      <View style={styles.pawsRow}>
        <View style={styles.disabledPaw}>
          <PawImage pawName="backLeft" pawData={backLeftDisability} />
        </View>
        <View style={styles.disabledPaw}>
          <PawImage pawName="backRight" pawData={backRightDisability} />
        </View>
      </View>
    </Card>
  );
};

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