import sessionTypes from '../types/session';

const initialState = {
  newSession: {
    petId: null,
  },
  frontLeftPaw: {
    complete: false,
    claws: {
      firstClaw: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      secondClaw: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      thirdClaw: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      fourthClaw: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      dewClaw: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
    }
  },
  frontRightPaw: {
    complete: false,
    claws: {
      firstClaw: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      secondClaw: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      thirdClaw: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      fourthClaw: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      dewClaw: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
    }
  },
  backLeftPaw: {
    complete: false,
    claws: {
      firstClaw: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      secondClaw: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      thirdClaw: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      fourthClaw: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      }
    }
  },
  backRightPaw: {
    complete: false,
    claws: {
      firstClaw: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      secondClaw: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      thirdClaw: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      fourthClaw: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
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
    case sessionTypes.UPDATE_FRONT_LEFT_PAW_OUTCOME:
      return {
        ...state,
        frontLeftPaw: {
          ...state.frontLeftPaw,
          claws: {
            firstClaw: {
              ...state.frontLeftPaw.claws.firstClaw,
              outcome: action.outcomes.firstClaw,
            },
            secondClaw: {
              ...state.frontLeftPaw.claws.secondClaw,
              outcome: action.outcomes.secondClaw,
            },
            thirdClaw: {
              ...state.frontLeftPaw.claws.thirdClaw,
              outcome: action.outcomes.thirdClaw,
            },
            fourthClaw: {
              ...state.frontLeftPaw.claws.fourthClaw,
              outcome: action.outcomes.fourthClaw,
            },
            dewClaw: {
              ...state.frontLeftPaw.claws.dewClaw,
              outcome: action.outcomes.dewClaw,
            },
          }
        }
      };
    case sessionTypes.UPDATE_FRONT_RIGHT_PAW_OUTCOME:
      return {
        ...state,
        frontRightPaw: {
          ...state.frontRightPaw,
          claws: {
            firstClaw: {
              ...state.frontRightPaw.claws.firstClaw,
              outcome: action.outcomes.firstClaw,
            },
            secondClaw: {
              ...state.frontRightPaw.claws.secondClaw,
              outcome: action.outcomes.secondClaw,
            },
            thirdClaw: {
              ...state.frontRightPaw.claws.thirdClaw,
              outcome: action.outcomes.thirdClaw,
            },
            fourthClaw: {
              ...state.frontRightPaw.claws.fourthClaw,
              outcome: action.outcomes.fourthClaw,
            },
            dewClaw: {
              ...state.frontRightPaw.claws.dewClaw,
              outcome: action.outcomes.dewClaw,
            },
          }
        }
      };
    case sessionTypes.UPDATE_BACK_LEFT_PAW_OUTCOME:
      return {
        ...state,
        backLeftPaw: {
          ...state.backLeftPaw,
          claws: {
            firstClaw: {
              ...state.backLeftPaw.claws.firstClaw,
              outcome: action.outcomes.firstClaw,
            },
            secondClaw: {
              ...state.backLeftPaw.claws.secondClaw,
              outcome: action.outcomes.secondClaw,
            },
            thirdClaw: {
              ...state.backLeftPaw.claws.thirdClaw,
              outcome: action.outcomes.thirdClaw,
            },
            fourthClaw: {
              ...state.backLeftPaw.claws.fourthClaw,
              outcome: action.outcomes.fourthClaw,
            }
          }
        }
      };
    case sessionTypes.UPDATE_BACK_RIGHT_PAW_OUTCOME:
      return {
        ...state,
        backRightPaw: {
          ...state.backRightPaw,
          claws: {
            firstClaw: {
              ...state.backRightPaw.claws.firstClaw,
              outcome: action.outcomes.firstClaw,
            },
            secondClaw: {
              ...state.backRightPaw.claws.secondClaw,
              outcome: action.outcomes.secondClaw,
            },
            thirdClaw: {
              ...state.backRightPaw.claws.thirdClaw,
              outcome: action.outcomes.thirdClaw,
            },
            fourthClaw: {
              ...state.backRightPaw.claws.fourthClaw,
              outcome: action.outcomes.fourthClaw,
            }
          }
        }
      };
    case sessionTypes.UPDATE_FRONT_LEFT_PAW_BEHAVIOR:
      return {
        ...state,
        frontLeftPaw: {
          ...state.frontLeftPaw,
          claws: {
            firstClaw: {
              ...state.frontLeftPaw.claws.firstClaw,
              behaviour: action.behaviours.firstClaw,
            },
            secondClaw: {
              ...state.frontLeftPaw.claws.secondClaw,
              behaviour: action.behaviours.secondClaw,
            },
            thirdClaw: {
              ...state.frontLeftPaw.claws.thirdClaw,
              behaviour: action.behaviours.thirdClaw,
            },
            fourthClaw: {
              ...state.frontLeftPaw.claws.fourthClaw,
              behaviour: action.behaviours.fourthClaw,
            },
            dewClaw: {
              ...state.frontLeftPaw.claws.dewClaw,
              behaviour: action.behaviours.dewClaw,
            },
          }
        }
      };
    case sessionTypes.UPDATE_FRONT_RIGHT_PAW_BEHAVIOR:
      return {
        ...state,
        frontRightPaw: {
          ...state.frontRightPaw,
          claws: {
            firstClaw: {
              ...state.frontRightPaw.claws.firstClaw,
              behaviour: action.behaviours.firstClaw,
            },
            secondClaw: {
              ...state.frontRightPaw.claws.secondClaw,
              behaviour: action.behaviours.secondClaw,
            },
            thirdClaw: {
              ...state.frontRightPaw.claws.thirdClaw,
              behaviour: action.behaviours.thirdClaw,
            },
            fourthClaw: {
              ...state.frontRightPaw.claws.fourthClaw,
              behaviour: action.behaviours.fourthClaw,
            },
            dewClaw: {
              ...state.frontRightPaw.claws.dewClaw,
              behaviour: action.behaviours.dewClaw,
            },
          }
        }
      };
    case sessionTypes.UPDATE_BACK_LEFT_PAW_BEHAVIOR:
      return {
        ...state,
        backLeftPaw: {
          ...state.backLeftPaw,
          claws: {
            firstClaw: {
              ...state.backLeftPaw.claws.firstClaw,
              behaviour: action.behaviours.firstClaw,
            },
            secondClaw: {
              ...state.backLeftPaw.claws.secondClaw,
              behaviour: action.behaviours.secondClaw,
            },
            thirdClaw: {
              ...state.backLeftPaw.claws.thirdClaw,
              behaviour: action.behaviours.thirdClaw,
            },
            fourthClaw: {
              ...state.backLeftPaw.claws.fourthClaw,
              behaviour: action.behaviours.fourthClaw,
            }
          }
        }
      };
    case sessionTypes.UPDATE_BACK_RIGHT_PAW_BEHAVIOR:
      return {
        ...state,
        backRightPaw: {
          ...state.backRightPaw,
          claws: {
            firstClaw: {
              ...state.backRightPaw.claws.firstClaw,
              behaviour: action.behaviours.firstClaw,
            },
            secondClaw: {
              ...state.backRightPaw.claws.secondClaw,
              behaviour: action.behaviours.secondClaw,
            },
            thirdClaw: {
              ...state.backRightPaw.claws.thirdClaw,
              behaviour: action.behaviours.thirdClaw,
            },
            fourthClaw: {
              ...state.backRightPaw.claws.fourthClaw,
              behaviour: action.behaviours.fourthClaw,
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
    case sessionTypes.UPDATE_NEW_SESSION_PET_ID:
      return {
        ...state,
        newSession: {
          ...state.newSession,
          petId: action.petId
        }
      };
    default:
      return state;
  }
};

export default sessionReducer;