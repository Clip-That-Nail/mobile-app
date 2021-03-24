import sessionTypes from '../types/session';

const initialState = {
  frontLeftPaw: {
    firstClaw: 'unchecked',
    secondClaw: 'unchecked',
    thirdClaw: 'unchecked',
    fourthClaw: 'unchecked',
    dewClaw: 'unchecked',
  },
  frontRightPaw: {
    firstClaw: 'unchecked',
    secondClaw: 'unchecked',
    thirdClaw: 'unchecked',
    fourthClaw: 'unchecked',
    dewClaw: 'unchecked',
  },
  backLeftPaw: {
    firstClaw: 'unchecked',
    secondClaw: 'unchecked',
    thirdClaw: 'unchecked',
    fourthClaw: 'unchecked',
  },
  backRightPaw: {
    firstClaw: 'unchecked',
    secondClaw: 'unchecked',
    thirdClaw: 'unchecked',
    fourthClaw: 'unchecked',
  },
}

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case sessionTypes.UPDATE_FRONT_LEFT_PAW:
      return { ...state, frontLeftPaw: action.pawData };
    case sessionTypes.UPDATE_FRONT_RIGHT_PAW:
      return { ...state, frontRightPaw: action.pawData };
    case sessionTypes.UPDATE_BACK_LEFT_PAW:
      return { ...state, backLeftPaw: action.pawData };
    case sessionTypes.UPDATE_BACK_RIGHT_PAW:
      return { ...state, backRightPaw: action.pawData };
    default:
      return state;
  }
};

export default sessionReducer;