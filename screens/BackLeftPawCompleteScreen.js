import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CommonActions } from '@react-navigation/native';

import HeaderButton from '../components/HeaderButton';
import CompleteSpecialIcon from '../components/CompleteSpecialIcon';
import CloseSessionHeaderButton from '../components/CloseSessionHeaderButton';
import { updateCompleteBackLeftPaw } from '../redux/actions/session';
import { goToNextPaw, isSessionComplete } from '../helpers/session';

import Colors from '../constants/Colors';

const BackLeftPawCompleteScreen = (props) => {
  const clawsData = useSelector(state => state.session.backLeftPaw.claws);

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.mainText}>Completed</Text>
      </View>
      <View>
        <Ionicons name="checkmark-circle" size={220} color={Colors.redColor} />
      </View>
      <View style={styles.iconsRow}>
        <View style={styles.iconContainer}>
          <CompleteSpecialIcon status={clawsData.firstClaw.status} badgeText='1' />
        </View>
        <View style={styles.iconContainer}>
          <CompleteSpecialIcon status={clawsData.secondClaw.status} badgeText='2' />
        </View>
        <View style={styles.iconContainer}>
          <CompleteSpecialIcon status={clawsData.thirdClaw.status} badgeText='3' />
        </View>
        <View style={styles.iconContainer}>
          <CompleteSpecialIcon status={clawsData.fourthClaw.status} badgeText='4' />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} icon="pencil" mode="contained" color={Colors.redColor} onPress={() => {
          dispatch(updateCompleteBackLeftPaw(false));
          props.navigation.navigate('BackLeftPawChecker')
        }}>
          Change
        </Button>
        <Button
          style={styles.button}
          icon={isSessionComplete() ? 'check-bold' : 'arrow-right-thick'}
          mode="contained"
          color={Colors.redColor}
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={() => {
            if (isSessionComplete) {
              props.navigation.navigate('Home', {}, CommonActions.navigate('Home'));
            } else {
              goToNextPaw(props.navigation);
            }
          }}
        >
          {isSessionComplete() ? 'Finish' : 'Next Paw'}
        </Button>
      </View>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'Back Left Paw',
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <CloseSessionHeaderButton onYesPress={() => {
        navData.navigation.navigate('Home', {}, CommonActions.navigate('Home'))
      }} />
    </HeaderButtons>),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  mainText: {
    fontSize: 40,
    fontFamily: 'roboto-black',
    color: Colors.redColor
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconContainer: {
    margin: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30
  },
  button: {
    marginHorizontal: 10,
    width: 150
  }
});

export default BackLeftPawCompleteScreen;