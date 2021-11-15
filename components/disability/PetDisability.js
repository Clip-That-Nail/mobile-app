import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import Card from '../Card';
import PawImage from '../PawImage';
import BoxTitle from '../titles/BoxTitle';

const screen = Dimensions.get('screen');

const PetDisability = ({ disabilities }) => {
  const [screenSize, setScreenSize] = useState(screen);
  const [imageSize, setImageSize] = useState(screenSize.width / 2 - 100);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window, screen }) => { // TODO: maybe move this to the main App.js ???
      setScreenSize(screen);
    });
    return () => subscription?.remove();
  });

  useEffect(() => {
    setImageSize(screenSize.width / 2 - 100);
  }, [screenSize]);

  return (
    <Card style={styles.disabilities}>
      <BoxTitle title="Disabled Claws" />
      <View style={styles.pawsRow}>
        <View style={styles.disabledPaw}>
          <PawImage size={imageSize} pawName="frontLeft" pawData={disabilities.frontLeft} />
        </View>
        <View style={styles.disabledPaw}>
          <PawImage size={imageSize} pawName="frontRight" pawData={disabilities.frontRight} />
        </View>
      </View>
      <View style={styles.pawsRow}>
        <View style={styles.disabledPaw}>
          <PawImage size={imageSize} pawName="backLeft" pawData={disabilities.backLeft} />
        </View>
        <View style={styles.disabledPaw}>
          <PawImage size={imageSize} pawName="backRight" pawData={disabilities.backRight} />
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