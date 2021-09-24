import React, { useState, useEffect, useCallback } from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CommonActions } from '@react-navigation/native';

import HeaderButton from '../../components/HeaderButton';
import SpecialCheckbox from '../../components/SpecialCheckbox';
import CloseSessionHeaderButton from '../../components/CloseSessionHeaderButton';
import { updateBackRightPawStatus } from '../../redux/actions/session';

import Colors from '../../constants/Colors';

const BackRightPawScreen = (props) => {
  const initialCheckBoxData = {
    firstClaw: 'unchecked',
    secondClaw: 'unchecked',
    thirdClaw: 'unchecked',
    fourthClaw: 'unchecked',
  };

  const [toggleCheckBoxes, setToggleCheckBoxes] = useState(initialCheckBoxData);

  const dispatch = useDispatch();

  const handleFirstClawOnCheckboxPress = (status) => {
    setToggleCheckBoxes({ ...toggleCheckBoxes, firstClaw: status });
  };

  const handleSecondClawOnCheckboxPress = (status) => {
    setToggleCheckBoxes({ ...toggleCheckBoxes, secondClaw: status });
  };

  const handleThirdClawOnCheckboxPress = (status) => {
    setToggleCheckBoxes({ ...toggleCheckBoxes, thirdClaw: status });
  };

  const handleFourthClawOnCheckboxPress = (status) => {
    setToggleCheckBoxes({ ...toggleCheckBoxes, fourthClaw: status });
  };

  const handlePawDataChange = useCallback(() => {
    dispatch(updateBackRightPawStatus(toggleCheckBoxes));
  }, [dispatch, toggleCheckBoxes]);

  useEffect(() => {
    handlePawDataChange();
  }, [handlePawDataChange]);

  return (
    <View style={styles.screen}>
      <View style={styles.checkboxes}>
        <View style={styles.checkboxContainer}>
          <SpecialCheckbox initialStatus={toggleCheckBoxes.firstClaw} onPress={handleFirstClawOnCheckboxPress} badgeText='1' />
        </View>
        <View style={styles.checkboxContainer}>
          <SpecialCheckbox initialStatus={toggleCheckBoxes.secondClaw} onPress={handleSecondClawOnCheckboxPress} badgeText='2' />
        </View>
        <View style={styles.checkboxContainer}>
          <SpecialCheckbox initialStatus={toggleCheckBoxes.thirdClaw} onPress={handleThirdClawOnCheckboxPress} badgeText='3' />
        </View>
        <View style={styles.checkboxContainer}>
          <SpecialCheckbox initialStatus={toggleCheckBoxes.fourthClaw} onPress={handleFourthClawOnCheckboxPress} badgeText='4' />
        </View>
      </View>
      <View style={styles.paw}>
        <Ionicons name="paw" size={180} color={Colors.violetColor} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button icon="check" mode="contained" color={Colors.violetColor} onPress={() => props.navigation.navigate('BackRightPawSummary')}>
          Summarise
        </Button>
      </View>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'Back Right Paw',
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <CloseSessionHeaderButton onYesPress={() => {
            navData.navigation.navigate('Home', {}, CommonActions.navigate('Home'))
          }} />
    </HeaderButtons>),
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
    alignItems: 'center'
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