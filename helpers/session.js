import store from '../redux/store';

/**
 * Navigate to the next not completed paw
 * 
 * @param {object} navigation The react-navigation props object (props.navigation)
 */
export const goToNextPaw = (navigation) => {
  const frontLeftPawComplete = store.getState().session.frontLeftPaw.complete;
  const frontRightPawComplete = store.getState().session.frontRightPaw.complete;
  const backLeftPawComplete = store.getState().session.backLeftPaw.complete;
  const backRightPawComplete = store.getState().session.backRightPaw.complete;

  if (!frontLeftPawComplete) {
    navigation.navigate('FrontLeftPawChecker');
  } else if (!frontRightPawComplete) {
    navigation.navigate('FrontRightPawChecker');
  } else if (!backLeftPawComplete) {
    navigation.navigate('BackLeftPawChecker');
  } else if (!backRightPawComplete) {
    navigation.navigate('BackRightPawChecker');
  } else {
    navigation.navigate('BackRightPawChecker');
  }
};

/**
 * Is session complete?
 */
export const isSessionComplete = () => {
  const frontLeftPawComplete = store.getState().session.frontLeftPaw.complete;
  const frontRightPawComplete = store.getState().session.frontRightPaw.complete;
  const backLeftPawComplete = store.getState().session.backLeftPaw.complete;
  const backRightPawComplete = store.getState().session.backRightPaw.complete;

  return frontLeftPawComplete && frontRightPawComplete && backLeftPawComplete && backRightPawComplete;
};