import React, { useCallback, useLayoutEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CommonActions } from '@react-navigation/native';

import HeaderButton from '../../components/HeaderButton';
import CompleteSpecialIcon from '../../components/CompleteSpecialIcon';
import CloseSessionHeaderButton from '../../components/CloseSessionHeaderButton';
import { updateCompleteFrontLeftPaw, finishSession } from '../../redux/actions/session';
import { goToNextPaw, isSessionComplete } from '../../helpers/session';

import Colors from '../../constants/Colors';

const FrontLeftPawCompleteScreen = (props) => {
  const { navigation } = props;
  const clawsData = useSelector(state => state.session.frontLeftPaw.claws);
  const frontLeftPawComplete = useSelector(state => state.session.frontLeftPaw.complete);
  const frontRightPawComplete = useSelector(state => state.session.frontRightPaw.complete);
  const backLeftPawComplete = useSelector(state => state.session.backLeftPaw.complete);
  const backRightPawComplete = useSelector(state => state.session.backRightPaw.complete);

  const dispatch = useDispatch();

  const completeSession = useCallback(async () => {
    try {
      await dispatch(finishSession());
      navigation.navigate('Home', {}, CommonActions.navigate('Home'));
    } catch (err) {
      Alert.alert(`Something went wrong`, err.message, [
        { text: 'Okay', style: 'default' },
      ]);
    }
  }, [dispatch]);

  useLayoutEffect(() => {
    if (frontLeftPawComplete && frontRightPawComplete && backLeftPawComplete && backRightPawComplete) {
      navigation.setOptions({
        headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Finish session" iconName='checkmark' onPress={() => {
            Alert.alert('Finish session?', 'Are you sure you want to finish this clipping session?', [
              { text: 'No', style: 'default' },
              {
                text: 'Yes', style: 'destructive', onPress: completeSession
              }
            ]);
          }} />
        </HeaderButtons>)
      });
    }
  }, [navigation, frontLeftPawComplete, frontRightPawComplete, backLeftPawComplete, backRightPawComplete, completeSession]);

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
        <View style={styles.iconContainer}>
          <CompleteSpecialIcon status={clawsData.dewClaw.status} badgeText='D' />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} icon="pencil" mode="contained" color={Colors.greenColor} onPress={() => {
          dispatch(updateCompleteFrontLeftPaw(false));
          navigation.navigate('FrontLeftPawChecker')
        }}>
          Change
        </Button>
        <Button
          style={styles.button}
          icon={isSessionComplete() ? 'check-bold' : 'arrow-right-thick'}
          mode="contained"
          color={Colors.greenColor}
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={() => {
            if (isSessionComplete) {
              navigation.navigate('Home', {}, CommonActions.navigate('Home'));
            } else {
              goToNextPaw(navigation);
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
    headerTitle: 'Front Left Paw',
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30
  },
  button: {
    marginHorizontal: 10,
    width: 150
  }
});

export default FrontLeftPawCompleteScreen;