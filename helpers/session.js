import store from '../redux/store';
import { pawsData } from './paws';

/**
 * Navigate to the next not completed paw
 * 
 * @param {object} navigation The react-navigation props object (props.navigation)
 */
export const goToNextPaw = (navigation) => {
  const frontLeftPawComplete = store.getState().newSession.frontLeftPaw.complete;
  const frontRightPawComplete = store.getState().newSession.frontRightPaw.complete;
  const backLeftPawComplete = store.getState().newSession.backLeftPaw.complete;
  const backRightPawComplete = store.getState().newSession.backRightPaw.complete;

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
  const frontLeftPawComplete = store.getState().newSession.frontLeftPaw.complete;
  const frontRightPawComplete = store.getState().newSession.frontRightPaw.complete;
  const backLeftPawComplete = store.getState().newSession.backLeftPaw.complete;
  const backRightPawComplete = store.getState().newSession.backRightPaw.complete;

  return frontLeftPawComplete && frontRightPawComplete && backLeftPawComplete && backRightPawComplete;
};

/**
 * Prepare session data so that statuses, behaviours and outcomes are in the separate objects
 * 
 * @param {object} navigation The react-navigation props object (props.navigation)
 * @return {array[object]} Returns array containing 3 objects accordingly for [statuses, behaviours, outcomes]
 */
export const prepareSessionData = (sessionData) => {
  const preparedStatuses = {};
  const preparedBehaviours = {};
  const preparedOutcomes = {};

  for (const pawKey in pawsData) {
    const paw = pawsData[pawKey];

    for (const clawKey in paw.claws) {
      const claw = paw.claws[clawKey];

      preparedStatuses[pawKey] = {
        ...preparedStatuses[pawKey],
        [claw.id]: sessionData[pawKey][clawKey].status
      }
      preparedBehaviours[pawKey] = {
        ...preparedBehaviours[pawKey],
        [claw.id]: sessionData[pawKey][clawKey].behaviour
      }
      preparedOutcomes[pawKey] = {
        ...preparedOutcomes[pawKey],
        [claw.id]: sessionData[pawKey][clawKey].outcome
      }
    }
  }

  return [preparedStatuses, preparedBehaviours, preparedOutcomes];
}