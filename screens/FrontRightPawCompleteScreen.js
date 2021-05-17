import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CommonActions } from '@react-navigation/native';

import HeaderButton from '../components/HeaderButton';
import CompleteSpecialIcon from '../components/CompleteSpecialIcon';
import { updateCompleteFrontRightPaw } from '../redux/actions/session';
import { goToNextPaw, isSessionComplete } from '../helper/session';

import Colors from '../constants/Colors';

const FrontRightPawCompleteScreen = (props) => {
  const clawsData = useSelector(state => state.session.frontRightPaw.claws);

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.mainText}>Completed</Text>
      </View>
      <View>
        <Ionicons name="checkmark-circle" size={220} color={Colors.blueColor} />
      </View>
      <View style={styles.iconsRow}>
        <View style={styles.iconContainer}>
          <CompleteSpecialIcon status={clawsData.firstClaw} badgeText='1' />
        </View>
        <View style={styles.iconContainer}>
          <CompleteSpecialIcon status={clawsData.secondClaw} badgeText='2' />
        </View>
        <View style={styles.iconContainer}>
          <CompleteSpecialIcon status={clawsData.thirdClaw} badgeText='3' />
        </View>
        <View style={styles.iconContainer}>
          <CompleteSpecialIcon status={clawsData.fourthClaw} badgeText='4' />
        </View>
        <View style={styles.iconContainer}>
          <CompleteSpecialIcon status={clawsData.dewClaw} badgeText='D' />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} icon="pencil" mode="contained" color={Colors.blueColor} onPress={() => {
          dispatch(updateCompleteFrontRightPaw(false));
          props.navigation.navigate({ routeName: 'FrontRightPawChecker' })
        }}>
          Change
        </Button>
        <Button style={styles.button} icon={isSessionComplete() ? 'check-bold' : 'arrow-right-thick'} mode="contained" color={Colors.blueColor} contentStyle={{ flexDirection: 'row-reverse' }} onPress={() => {
          goToNextPaw(props.navigation);
        }}>
          {isSessionComplete() ? 'Finish' : 'Next Paw'}
        </Button>
      </View>
    </View>
  );
};

export const screenOptions = (navData) => {
  navData.navigation.getParam('complete');

  return {
    headerTitle: 'Front Right Paw',
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Stop session" iconName='close' onPress={() => {
        navData.navigation.navigate('Home', {}, CommonActions.navigate({ routeName: 'Home' }))
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
    color: Colors.blueColor
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

export default FrontRightPawCompleteScreen;