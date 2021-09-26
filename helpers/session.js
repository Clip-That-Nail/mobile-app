import store from '../redux/store';

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