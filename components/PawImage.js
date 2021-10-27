import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

import frontLeftPaw from '../assets/images/paws/frontLeftPaw.png';
import frontRightPaw from '../assets/images/paws/frontRightPaw.png';
import backLeftPaw from '../assets/images/paws/backLeftPaw.png';
import backRightPaw from '../assets/images/paws/backRightPaw.png';

import FirstClaw from '../components/claws/FirstClaw';
import SecondClaw from '../components/claws/SecondClaw';
import ThirdClaw from '../components/claws/ThirdClaw';
import FourthClaw from '../components/claws/FourthClaw';
import LeftDewClaw from '../components/claws/LeftDewClaw';
import RightDewClaw from '../components/claws/RightDewClaw';

const screen = Dimensions.get('screen');

const PawImage = ({ pawName, pawData }) => {
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

  const displayPawImage = () => {
    switch (pawName) {
      case 'frontLeft':
        return <Image style={{ ...styles.image, width: imageSize, height: imageSize }} source={frontLeftPaw} />;
      case 'frontRight':
        return <Image style={{ ...styles.image, width: imageSize, height: imageSize }} source={frontRightPaw} />;
      case 'backLeft':
        return <Image style={{ ...styles.image, width: imageSize, height: imageSize }} source={backLeftPaw} />;
      case 'backRight':
        return <Image style={{ ...styles.image, width: imageSize, height: imageSize }} source={backRightPaw} />;
    }
  };

  const displayClawsImages = () => {
    const firstClawExists = pawData.find(claw => claw.claw === 'first');
    const secondClawExists = pawData.find(claw => claw.claw === 'second');
    const thirdClawExists = pawData.find(claw => claw.claw === 'third');
    const fourthClawExists = pawData.find(claw => claw.claw === 'fourth');
    const dewClawExists = pawData.find(claw => claw.claw === 'dew');

    return (
      <>
        <FirstClaw type={(firstClawExists ? 'disabled' : 'empty')} styles={{ ...styles, image: { ...styles.image, width: imageSize, height: imageSize } }} />
        <SecondClaw type={(secondClawExists ? 'disabled' : 'empty')} styles={{ ...styles, image: { ...styles.image, width: imageSize, height: imageSize } }} />
        <ThirdClaw type={(thirdClawExists ? 'disabled' : 'empty')} styles={{ ...styles, image: { ...styles.image, width: imageSize, height: imageSize } }} />
        <FourthClaw type={(fourthClawExists ? 'disabled' : 'empty')} styles={{ ...styles, image: { ...styles.image, width: imageSize, height: imageSize } }} />
        {
          pawName === 'frontLeft' && <RightDewClaw type={(dewClawExists ? 'disabled' : 'empty')} styles={{ ...styles, image: { ...styles.image, width: imageSize, height: imageSize } }} />
        }
        {
          pawName === 'frontRight' && <LeftDewClaw type={(dewClawExists ? 'disabled' : 'empty')} styles={{ ...styles, image: { ...styles.image, width: imageSize, height: imageSize } }} />
        }
      </>
    );
  };

  return (
    <View>
      {/* <Text>{JSON.stringify(pawData)}</Text> */}
      <View style={{ ...styles.imageContainer, width: imageSize, height: imageSize }}>
        {displayClawsImages()}
        {displayPawImage()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    top: 0,
    overflow: 'hidden',
  },
});

export default PawImage;