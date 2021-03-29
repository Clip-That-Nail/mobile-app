import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

import CompleteSpecialIcon from '../components/CompleteSpecialIcon';
import { updateCompleteFrontLeftPaw } from '../redux/actions/session';

import Colors from '../constants/Colors';

const FrontLeftPawCompleteScreen = (props) => {
  const clawsData = useSelector(state => state.session.frontLeftPaw.claws);

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.mainText}>Completed</Text>
      </View>
      <View>
        <Ionicons name="checkmark-circle" size={220} color={Colors.greenColor} />
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
        <Button icon="pencil" mode="contained" color={Colors.greenColor} onPress={() => {
          dispatch(updateCompleteFrontLeftPaw(false));
          props.navigation.navigate({ routeName: 'FrontLeftPawChecker' })
        }}>
          Change
        </Button>
      </View>
    </View>
  );
};

FrontLeftPawCompleteScreen.navigationOptions = (navData) => {
  navData.navigation.getParam('complete');

  return {
    headerTitle: 'FLP - Completed',
    headerLeft: () => { }
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    fontSize: 40,
    fontFamily: 'roboto-black',
    color: Colors.greenColor
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconContainer: {
    margin: 5
  },
  buttonContainer: {
    margin: 10
  }
});

export default FrontLeftPawCompleteScreen;