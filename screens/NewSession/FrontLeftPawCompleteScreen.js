import React, { useCallback, useLayoutEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { LinearGradient } from 'expo-linear-gradient';

import HeaderButton from '../../components/HeaderButton';
import CompleteSpecialIcon from '../../components/CompleteSpecialIcon';
import CloseSessionHeaderButton from '../../components/CloseSessionHeaderButton';
import { updateCompleteFrontLeftPaw } from '../../redux/actions/newSession';
import { goToNextPaw, isSessionComplete, completeSession } from '../../helpers/session';

import Colors from '../../constants/Colors';

const FrontLeftPawCompleteScreen = (props) => {
  const { navigation } = props;
  const clawsData = useSelector(state => state.newSession.frontLeft.claws);
  const frontLeftPawComplete = useSelector(state => state.newSession.frontLeft.complete);
  const frontRightPawComplete = useSelector(state => state.newSession.frontRight.complete);
  const backLeftPawComplete = useSelector(state => state.newSession.backLeft.complete);
  const backRightPawComplete = useSelector(state => state.newSession.backRight.complete);

  const dispatch = useDispatch();

  const completeSessionWithCallback = useCallback(async (status) => await completeSession(status, dispatch, navigation), [dispatch, navigation]);

  useLayoutEffect(() => {
    if (frontLeftPawComplete && frontRightPawComplete && backLeftPawComplete && backRightPawComplete) {
      navigation.setOptions({
        headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Finish session" iconName='checkmark' onPress={() => {
            Alert.alert('Finish session?', 'Are you sure you want to finish this clipping session?', [
              { text: 'No', style: 'default' },
              {
                text: 'Yes', style: 'destructive', onPress: completeSessionWithCallback('finished')
              }
            ]);
          }} />
        </HeaderButtons>)
      });
    }
  }, [navigation, frontLeftPawComplete, frontRightPawComplete, backLeftPawComplete, backRightPawComplete, completeSessionWithCallback]);

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
      <View>
        <Text style={styles.mainText}>Completed</Text>
      </View>
      <View>
        <Ionicons name="checkmark-circle" size={220} color={Colors.greenColor} />
      </View>
      <View style={styles.iconsRow}>
        <View style={styles.iconContainer}>
          <CompleteSpecialIcon status={clawsData.first.status} badgeText='1' />
        </View>
        <View style={styles.iconContainer}>
          <CompleteSpecialIcon status={clawsData.second.status} badgeText='2' />
        </View>
        <View style={styles.iconContainer}>
          <CompleteSpecialIcon status={clawsData.third.status} badgeText='3' />
        </View>
        <View style={styles.iconContainer}>
          <CompleteSpecialIcon status={clawsData.fourth.status} badgeText='4' />
        </View>
        <View style={styles.iconContainer}>
          <CompleteSpecialIcon status={clawsData.dew.status} badgeText='D' />
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
            if (isSessionComplete()) {
              completeSessionWithCallback('finished');
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
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-around',
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