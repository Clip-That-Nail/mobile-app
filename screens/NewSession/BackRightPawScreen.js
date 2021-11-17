import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { LinearGradient } from 'expo-linear-gradient';

import HeaderButton from '../../components/HeaderButton';
import SpecialCheckbox from '../../components/SpecialCheckbox';
import CloseSessionHeaderButton from '../../components/CloseSessionHeaderButton';
import PawImage from '../../components/PawImage';
import { updateBackRightPawStatus } from '../../redux/actions/newSession';
import { completeSession } from '../../helpers/session';

import Colors from '../../constants/Colors';

const BackRightPawScreen = ({ navigation }) => {
  const petId = useSelector(state => state.newSession.pet.id);
  const disabilities = useSelector(state => state.pets.pets.find(pet => pet.id === petId)?.disabilities?.backRight);

  const [toggleCheckBoxes, setToggleCheckBoxes] = useState({
    first: disabilities?.first === 'empty' ? 'unchecked' : disabilities?.first,
    second: disabilities?.second === 'empty' ? 'unchecked' : disabilities?.second,
    third: disabilities?.third === 'empty' ? 'unchecked' : disabilities?.third,
    fourth: disabilities?.fourth === 'empty' ? 'unchecked' : disabilities?.fourth,
  });
  
  const dispatch = useDispatch();

  const handleFirstClawOnCheckboxPress = (status) => {
    setToggleCheckBoxes({ ...toggleCheckBoxes, first: status });
  };

  const handleSecondClawOnCheckboxPress = (status) => {
    setToggleCheckBoxes({ ...toggleCheckBoxes, second: status });
  };

  const handleThirdClawOnCheckboxPress = (status) => {
    setToggleCheckBoxes({ ...toggleCheckBoxes, third: status });
  };

  const handleFourthClawOnCheckboxPress = (status) => {
    setToggleCheckBoxes({ ...toggleCheckBoxes, fourth: status });
  };

  const handlePawDataChange = useCallback(() => {
    dispatch(updateBackRightPawStatus(toggleCheckBoxes));
  }, [dispatch, toggleCheckBoxes]);

  useEffect(() => {
    handlePawDataChange();
  }, [handlePawDataChange]);

  const completeSessionWithCallback = useCallback(async (status) => await completeSession(status, dispatch, navigation), [dispatch, navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <CloseSessionHeaderButton
          onYesNotFinishedPress={() => completeSessionWithCallback('unfinished')}
          onYesPress={() => {
            navigation.navigate('Home', { screen: 'Home' })
          }}
        />
      </HeaderButtons>),
    });
  }, [navigation, completeSessionWithCallback]);

  return (
    <View style={styles.screen}>
      <LinearGradient
        colors={['white', 'transparent']}
        locations={[0.05, 0.3]}
        style={styles.background}
      />
      <View style={styles.checkboxes}>
        <View style={styles.checkboxContainer}>
          <SpecialCheckbox initialStatus={toggleCheckBoxes.first} onPress={handleFirstClawOnCheckboxPress} badgeText='1' />
        </View>
        <View style={styles.checkboxContainer}>
          <SpecialCheckbox initialStatus={toggleCheckBoxes.second} onPress={handleSecondClawOnCheckboxPress} badgeText='2' />
        </View>
        <View style={styles.checkboxContainer}>
          <SpecialCheckbox initialStatus={toggleCheckBoxes.third} onPress={handleThirdClawOnCheckboxPress} badgeText='3' />
        </View>
        <View style={styles.checkboxContainer}>
          <SpecialCheckbox initialStatus={toggleCheckBoxes.fourth} onPress={handleFourthClawOnCheckboxPress} badgeText='4' />
        </View>
      </View>
      <View style={styles.paw}>
        <PawImage size={180} pawName="backRight" pawData={toggleCheckBoxes} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button icon="check" mode="contained" color={Colors.violetColor} onPress={() => navigation.navigate('BackRightPawSummary')}>
          Summarise
        </Button>
      </View>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'Back Right Paw',
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Paw Summary" iconName='checkmark' onPress={() => {
        navData.navigation.navigate('BackRightPawSummary');
      }} />
    </HeaderButtons>)
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eff1f5',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  checkboxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    marginLeft: 15,
    marginRight: 15
  },
  paw: {
    paddingVertical: 40,
  },
  dewclawCheckboxContainer: {
    alignItems: 'center'
  },
  clawText: {
    fontFamily: 'roboto',
    fontSize: 14,
  },
  buttonWrapper: {
    marginTop: 20
  }
});

export default BackRightPawScreen;