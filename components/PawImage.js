import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

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

const PawImage = ({ size, pawName, pawData }) => {
  const displayPawImage = () => {
    switch (pawName) {
      case 'frontLeft':
        return <Image style={{ ...styles.image, width: size, height: size }} source={frontLeftPaw} />;
      case 'frontRight':
        return <Image style={{ ...styles.image, width: size, height: size }} source={frontRightPaw} />;
      case 'backLeft':
        return <Image style={{ ...styles.image, width: size, height: size }} source={backLeftPaw} />;
      case 'backRight':
        return <Image style={{ ...styles.image, width: size, height: size }} source={backRightPaw} />;
    }
  };

  const displayClawsImages = () => (
    <>
      <FirstClaw type={pawData?.first ?? 'empty'} styles={{ ...styles, image: { ...styles.image, width: size, height: size } }} />
      <SecondClaw type={pawData?.second ?? 'empty'} styles={{ ...styles, image: { ...styles.image, width: size, height: size } }} />
      <ThirdClaw type={pawData?.third ?? 'empty'} styles={{ ...styles, image: { ...styles.image, width: size, height: size } }} />
      <FourthClaw type={pawData?.fourth ?? 'empty'} styles={{ ...styles, image: { ...styles.image, width: size, height: size } }} />
      {
        pawName === 'frontLeft' && <RightDewClaw type={pawData?.dew ?? 'empty'} styles={{ ...styles, image: { ...styles.image, width: size, height: size } }} />
      }
      {
        pawName === 'frontRight' && <LeftDewClaw type={pawData?.dew ?? 'empty'} styles={{ ...styles, image: { ...styles.image, width: size, height: size } }} />
      }
    </>
  );

  return (
    <View>
      <View style={{ ...styles.imageContainer, width: size, height: size }}>
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