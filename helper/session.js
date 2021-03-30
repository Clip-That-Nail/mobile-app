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
    navigation.navigate({ routeName: 'FrontLeftPawChecker' });
  } else if (!frontRightPawComplete) {
    navigation.navigate({ routeName: 'FrontRightPawChecker' });
  } else if (!backLeftPawComplete) {
    navigation.navigate({ routeName: 'BackLeftPawChecker' });
  } else if (!backRightPawComplete) {
    navigation.navigate({ routeName: 'BackRightPawChecker' });
  } else {
    navigation.navigate({ routeName: 'BackRightPawChecker' });
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