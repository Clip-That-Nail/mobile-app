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
import { updateCompleteBackRightPaw, finishSession } from '../../redux/actions/newSession';
import { goToNextPaw, isSessionComplete } from '../../helpers/session';

import Colors from '../../constants/Colors';

const BackRightPawCompleteScreen = (props) => {
  const { navigation } = props;
  const clawsData = useSelector(state => state.newSession.backRightPaw.claws);
  const frontLeftPawComplete = useSelector(state => state.newSession.frontLeftPaw.complete);
  const frontRightPawComplete = useSelector(state => state.newSession.frontRightPaw.complete);
  const backLeftPawComplete = useSelector(state => state.newSession.backLeftPaw.complete);
  const backRightPawComplete = useSelector(state => state.newSession.backRightPaw.complete);

  const dispatch = useDispatch();

  const completeSession = useCallback(async () => {
    try {
      await dispatch(finishSession());
      navigation.navigate('Home', { screen: 'Home' });
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
      <LinearGradient
        colors={['white', 'transparent']}
        locations={[0.05, 0.3]}
        style={styles.background}
      />
      <View>
        <Text style={styles.mainText}>Completed</Text>
      </View>
      <View>
        <Ionicons name="checkmark-circle" size={220} color={Colors.violetColor} />
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
        <Button style={styles.button} icon="pencil" mode="contained" color={Colors.violetColor} onPress={() => {
          dispatch(updateCompleteBackRightPaw(false));
          navigation.navigate('BackRightPawChecker')
        }}>
          Change
        </Button>
        <Button
          style={styles.button}
          icon={isSessionComplete() ? 'check-bold' : 'arrow-right-thick'}
          mode="contained"
          color={Colors.violetColor}
          contentStyle={{ flexDirection: 'row-reverse' }}
          onPress={() => {
            if (isSessionComplete()) {
              completeSession();
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
    headerTitle: 'Back Right Paw',
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <CloseSessionHeaderButton onYesPress={() => {
        navData.navigation.navigate('Home', { screen: 'Home' })
      }} />
    </HeaderButtons>),
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
    color: Colors.violetColor
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

export default BackRightPawCompleteScreen;