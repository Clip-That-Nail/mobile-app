import sessionTypes from '../types/session';

const initialState = {
  frontLeftPaw: {
    complete: false,
    claws: {
      firstClaw: 'unchecked',
      secondClaw: 'unchecked',
      thirdClaw: 'unchecked',
      fourthClaw: 'unchecked',
      dewClaw: 'unchecked',
    }
  },
  frontRightPaw: {
    complete: false,
    claws: {
      firstClaw: 'unchecked',
      secondClaw: 'unchecked',
      thirdClaw: 'unchecked',
      fourthClaw: 'unchecked',
      dewClaw: 'unchecked',
    }
  },
  backLeftPaw: {
    complete: false,
    claws: {
      firstClaw: 'unchecked',
      secondClaw: 'unchecked',
      thirdClaw: 'unchecked',
      fourthClaw: 'unchecked',
    }
  },
  backRightPaw: {
    complete: false,
    claws: {
      firstClaw: 'unchecked',
      secondClaw: 'unchecked',
      thirdClaw: 'unchecked',
      fourthClaw: 'unchecked',
    }
  },
}

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case sessionTypes.UPDATE_FRONT_LEFT_PAW:
      return {
        ...state,
        frontLeftPaw: {
          ...state.frontLeftPaw,
          claws: action.pawData
        }
      };
    case sessionTypes.UPDATE_FRONT_RIGHT_PAW:
      return {
        ...state,
        frontRightPaw: {
          ...state.frontRightPaw,
          claws: action.pawData
        }
      };
    case sessionTypes.UPDATE_BACK_LEFT_PAW:
      return {
        ...state,
        backLeftPaw: {
          ...state.backLeftPaw,
          claws: action.pawData
        }
      };
    case sessionTypes.UPDATE_BACK_RIGHT_PAW:
      return {
        ...state,
        backRightPaw: {
          ...state.backRightPaw,
          claws: action.pawData
        }
      };
    case sessionTypes.COMPLETE_FRONT_LEFT_PAW:
      return {
        ...state,
        backRightPaw: {
          ...state.frontLeftPaw,
          complete: action.complete
        }
      };
    case sessionTypes.COMPLETE_FRONT_RIGHT_PAW:
      return {
        ...state,
        backRightPaw: {
          ...state.frontRightPaw,
          complete: action.complete
        }
      };
    case sessionTypes.COMPLETE_BACK_LEFT_PAW:
      return {
        ...state,
        backRightPaw: {
          ...state.backLeftPaw,
          complete: action.complete
        }
      };
    case sessionTypes.COMPLETE_BACK_RIGHT_PAW:
      return {
        ...state,
        backRightPaw: {
          ...state.backRightPaw,
          complete: action.complete
        }
      };
    default:
      return state;
  }
};

export default sessionReducer;