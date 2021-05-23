import sessionTypes from '../types/session';

const initialState = {
  frontLeftPaw: {
    complete: false,
    claws: {
      firstClaw: {
        status: 'unchecked',
        outcome: '',
        behavior: ''
      },
      secondClaw: {
        status: 'unchecked',
        outcome: '',
        behavior: ''
      },
      thirdClaw: {
        status: 'unchecked',
        outcome: '',
        behavior: ''
      },
      fourthClaw: {
        status: 'unchecked',
        outcome: '',
        behavior: ''
      },
      dewClaw: {
        status: 'unchecked',
        outcome: '',
        behavior: ''
      },
    }
  },
  frontRightPaw: {
    complete: false,
    claws: {
      firstClaw: {
        status: 'unchecked',
        outcome: '',
        behavior: ''
      },
      secondClaw: {
        status: 'unchecked',
        outcome: '',
        behavior: ''
      },
      thirdClaw: {
        status: 'unchecked',
        outcome: '',
        behavior: ''
      },
      fourthClaw: {
        status: 'unchecked',
        outcome: '',
        behavior: ''
      },
      dewClaw: {
        status: 'unchecked',
        outcome: '',
        behavior: ''
      },
    }
  },
  backLeftPaw: {
    complete: false,
    claws: {
      firstClaw: {
        status: 'unchecked',
        outcome: '',
        behavior: ''
      },
      secondClaw: {
        status: 'unchecked',
        outcome: '',
        behavior: ''
      },
      thirdClaw: {
        status: 'unchecked',
        outcome: '',
        behavior: ''
      },
      fourthClaw: {
        status: 'unchecked',
        outcome: '',
        behavior: ''
      }
    }
  },
  backRightPaw: {
    complete: false,
    claws: {
      firstClaw: {
        status: 'unchecked',
        outcome: '',
        behavior: ''
      },
      secondClaw: {
        status: 'unchecked',
        outcome: '',
        behavior: ''
      },
      thirdClaw: {
        status: 'unchecked',
        outcome: '',
        behavior: ''
      },
      fourthClaw: {
        status: 'unchecked',
        outcome: '',
        behavior: ''
      }
    }
  },
}

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case sessionTypes.UPDATE_FRONT_LEFT_PAW_STATUS:
      return {
        ...state,
        frontLeftPaw: {
          ...state.frontLeftPaw,
          claws: {
            firstClaw: {
              ...state.frontLeftPaw.claws.firstClaw,
              status: action.pawData.firstClaw,
            },
            secondClaw: {
              ...state.frontLeftPaw.claws.secondClaw,
              status: action.pawData.secondClaw,
            },
            thirdClaw: {
              ...state.frontLeftPaw.claws.thirdClaw,
              status: action.pawData.thirdClaw,
            },
            fourthClaw: {
              ...state.frontLeftPaw.claws.fourthClaw,
              status: action.pawData.fourthClaw,
            },
            dewClaw: {
              ...state.frontLeftPaw.claws.dewClaw,
              status: action.pawData.dewClaw,
            },
          }
        }
      };
    case sessionTypes.UPDATE_FRONT_RIGHT_PAW_STATUS:
      return {
        ...state,
        frontRightPaw: {
          ...state.frontRightPaw,
          claws: {
            firstClaw: {
              ...state.frontRightPaw.claws.firstClaw,
              status: action.pawData.firstClaw,
            },
            secondClaw: {
              ...state.frontRightPaw.claws.secondClaw,
              status: action.pawData.secondClaw,
            },
            thirdClaw: {
              ...state.frontRightPaw.claws.thirdClaw,
              status: action.pawData.thirdClaw,
            },
            fourthClaw: {
              ...state.frontRightPaw.claws.fourthClaw,
              status: action.pawData.fourthClaw,
            },
            dewClaw: {
              ...state.frontRightPaw.claws.dewClaw,
              status: action.pawData.dewClaw,
            },
          }
        }
      };
    case sessionTypes.UPDATE_BACK_LEFT_PAW_STATUS:
      return {
        ...state,
        backLeftPaw: {
          ...state.backLeftPaw,
          claws: {
            firstClaw: {
              ...state.backLeftPaw.claws.firstClaw,
              status: action.pawData.firstClaw,
            },
            secondClaw: {
              ...state.backLeftPaw.claws.secondClaw,
              status: action.pawData.secondClaw,
            },
            thirdClaw: {
              ...state.backLeftPaw.claws.thirdClaw,
              status: action.pawData.thirdClaw,
            },
            fourthClaw: {
              ...state.backLeftPaw.claws.fourthClaw,
              status: action.pawData.fourthClaw,
            }
          }
        }
      };
    case sessionTypes.UPDATE_BACK_RIGHT_PAW_STATUS:
      return {
        ...state,
        backRightPaw: {
          ...state.backRightPaw,
          claws: {
            firstClaw: {
              ...state.backRightPaw.claws.firstClaw,
              status: action.pawData.firstClaw,
            },
            secondClaw: {
              ...state.backRightPaw.claws.secondClaw,
              status: action.pawData.secondClaw,
            },
            thirdClaw: {
              ...state.backRightPaw.claws.thirdClaw,
              status: action.pawData.thirdClaw,
            },
            fourthClaw: {
              ...state.backRightPaw.claws.fourthClaw,
              status: action.pawData.fourthClaw,
            }
          }
        }
      };
    case sessionTypes.COMPLETE_FRONT_LEFT_PAW:
      return {
        ...state,
        frontLeftPaw: {
          ...state.frontLeftPaw,
          complete: action.complete
        }
      };
    case sessionTypes.COMPLETE_FRONT_RIGHT_PAW:
      return {
        ...state,
        frontRightPaw: {
          ...state.frontRightPaw,
          complete: action.complete
        }
      };
    case sessionTypes.COMPLETE_BACK_LEFT_PAW:
      return {
        ...state,
        backLeftPaw: {
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