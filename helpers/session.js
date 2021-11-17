import { Alert } from 'react-native';

import store from '../redux/store';
import { finishSession } from '../redux/actions/newSession';
import { pawsData } from './pawsData';

/**
 * Navigate to the next not completed paw
 * 
 * @param {object} navigation The react-navigation props object (props.navigation)
 */
export const goToNextPaw = (navigation) => {
  const frontLeftPawComplete = store.getState().newSession.frontLeft.complete;
  const frontRightPawComplete = store.getState().newSession.frontRight.complete;
  const backLeftPawComplete = store.getState().newSession.backLeft.complete;
  const backRightPawComplete = store.getState().newSession.backRight.complete;

  if (!frontLeftPawComplete) {
    navigation.navigate('FrontLeftPaw', { params: { screen: 'FrontLeftPawChecker' } });
  } else if (!frontRightPawComplete) {
    navigation.navigate('FrontRightPaw', { params: { screen: 'FrontRightPawChecker' } });
  } else if (!backLeftPawComplete) {
    navigation.navigate('BackLeftPaw', { params: { screen: 'BackLeftPawChecker' } });
  } else if (!backRightPawComplete) {
    navigation.navigate('BackRightPaw', { params: { screen: 'BackRightPawChecker' } });
  } else {
    navigation.navigate('BackRightPaw', { params: { screen: 'BackRightPawChecker' } });
  }
};

/**
 * Is session complete?
 */
export const isSessionComplete = () => {
  const frontLeftPawComplete = store.getState().newSession.frontLeft.complete;
  const frontRightPawComplete = store.getState().newSession.frontRight.complete;
  const backLeftPawComplete = store.getState().newSession.backLeft.complete;
  const backRightPawComplete = store.getState().newSession.backRight.complete;

  return frontLeftPawComplete && frontRightPawComplete && backLeftPawComplete && backRightPawComplete;
};

/**
 * Prepare session data so that statuses, behaviours and outcomes are in the separate objects
 * 
 * @param {object} sessionData Session data object
 * @param {object} disabilities Pet disabilities object
 * @return {array[object]} Returns array containing 3 objects accordingly for [statuses, behaviours, outcomes]
 */
export const prepareSessionData = (sessionData, disabilities) => {
  const preparedStatuses = {};
  const preparedBehaviours = {};
  const preparedOutcomes = {};

  for (const pawKey in pawsData) {
    const paw = pawsData[pawKey];

    for (const clawKey in paw.claws) {
      const claw = paw.claws[clawKey];

      preparedStatuses[pawKey] = {
        ...preparedStatuses[pawKey],
        [claw.id]: disabilities[pawKey][clawKey.split("C").shift()] === "empty"
          ? sessionData[pawKey][clawKey].status
          : disabilities[pawKey][clawKey.split("C").shift()]
      }
      preparedBehaviours[pawKey] = {
        ...preparedBehaviours[pawKey],
        [claw.id]: disabilities[pawKey][clawKey.split("C").shift()] === "empty"
          ? sessionData[pawKey][clawKey].behaviour
          : disabilities[pawKey][clawKey.split("C").shift()]
      }
      preparedOutcomes[pawKey] = {
        ...preparedOutcomes[pawKey],
        [claw.id]: disabilities[pawKey][clawKey.split("C").shift()] === "empty"
          ? sessionData[pawKey][clawKey].outcome
          : disabilities[pawKey][clawKey.split("C").shift()]
      }
    }
  }

  return [preparedStatuses, preparedBehaviours, preparedOutcomes];
}

/**
 * Complete session
 */
export const completeSession = async (status, dispatch, navigation) => {
  try {
    console.log('status', status);
    await dispatch(finishSession(status));
    navigation.navigate('Home', { screen: 'Home' });
  } catch (err) {
    Alert.alert(`Something went wrong when finishing session`, err.message, [
      { text: 'Okay', style: 'default' },
    ]);
  }
};