import sessionTypes from '../types/newSession';

const INITIAL_STATE = {
  pet: {
    id: null,
  },
  frontLeft: {
    complete: false,
    claws: {
      first: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      second: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      third: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      fourth: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      dew: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
    }
  },
  frontRight: {
    complete: false,
    claws: {
      first: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      second: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      third: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      fourth: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      dew: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
    }
  },
  backLeft: {
    complete: false,
    claws: {
      first: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      second: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      third: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      fourth: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      }
    }
  },
  backRight: {
    complete: false,
    claws: {
      first: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      second: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      third: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      },
      fourth: {
        status: 'unchecked',
        outcome: 'not-selected',
        behaviour: 'not-selected'
      }
    }
  },
}

const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case sessionTypes.UPDATE_FRONT_LEFT_PAW_STATUS:
      return {
        ...state,
        frontLeft: {
          ...state.frontLeft,
          claws: {
            first: {
              ...state.frontLeft.claws.first,
              status: action.pawData.first,
            },
            second: {
              ...state.frontLeft.claws.second,
              status: action.pawData.second,
            },
            third: {
              ...state.frontLeft.claws.third,
              status: action.pawData.third,
            },
            fourth: {
              ...state.frontLeft.claws.fourth,
              status: action.pawData.fourth,
            },
            dew: {
              ...state.frontLeft.claws.dew,
              status: action.pawData.dew,
            },
          }
        }
      };
    case sessionTypes.UPDATE_FRONT_RIGHT_PAW_STATUS:
      return {
        ...state,
        frontRight: {
          ...state.frontRight,
          claws: {
            first: {
              ...state.frontRight.claws.first,
              status: action.pawData.first,
            },
            second: {
              ...state.frontRight.claws.second,
              status: action.pawData.second,
            },
            third: {
              ...state.frontRight.claws.third,
              status: action.pawData.third,
            },
            fourth: {
              ...state.frontRight.claws.fourth,
              status: action.pawData.fourth,
            },
            dew: {
              ...state.frontRight.claws.dew,
              status: action.pawData.dew,
            },
          }
        }
      };
    case sessionTypes.UPDATE_BACK_LEFT_PAW_STATUS:
      return {
        ...state,
        backLeft: {
          ...state.backLeft,
          claws: {
            first: {
              ...state.backLeft.claws.first,
              status: action.pawData.first,
            },
            second: {
              ...state.backLeft.claws.second,
              status: action.pawData.second,
            },
            third: {
              ...state.backLeft.claws.third,
              status: action.pawData.third,
            },
            fourth: {
              ...state.backLeft.claws.fourth,
              status: action.pawData.fourth,
            }
          }
        }
      };
    case sessionTypes.UPDATE_BACK_RIGHT_PAW_STATUS:
      return {
        ...state,
        backRight: {
          ...state.backRight,
          claws: {
            first: {
              ...state.backRight.claws.first,
              status: action.pawData.first,
            },
            second: {
              ...state.backRight.claws.second,
              status: action.pawData.second,
            },
            third: {
              ...state.backRight.claws.third,
              status: action.pawData.third,
            },
            fourth: {
              ...state.backRight.claws.fourth,
              status: action.pawData.fourth,
            }
          }
        }
      };
    case sessionTypes.UPDATE_FRONT_LEFT_PAW_OUTCOME:
      return {
        ...state,
        frontLeft: {
          ...state.frontLeft,
          claws: {
            first: {
              ...state.frontLeft.claws.first,
              outcome: action.outcomes.first,
            },
            second: {
              ...state.frontLeft.claws.second,
              outcome: action.outcomes.second,
            },
            third: {
              ...state.frontLeft.claws.third,
              outcome: action.outcomes.third,
            },
            fourth: {
              ...state.frontLeft.claws.fourth,
              outcome: action.outcomes.fourth,
            },
            dew: {
              ...state.frontLeft.claws.dew,
              outcome: action.outcomes.dew,
            },
          }
        }
      };
    case sessionTypes.UPDATE_FRONT_RIGHT_PAW_OUTCOME:
      return {
        ...state,
        frontRight: {
          ...state.frontRight,
          claws: {
            first: {
              ...state.frontRight.claws.first,
              outcome: action.outcomes.first,
            },
            second: {
              ...state.frontRight.claws.second,
              outcome: action.outcomes.second,
            },
            third: {
              ...state.frontRight.claws.third,
              outcome: action.outcomes.third,
            },
            fourth: {
              ...state.frontRight.claws.fourth,
              outcome: action.outcomes.fourth,
            },
            dew: {
              ...state.frontRight.claws.dew,
              outcome: action.outcomes.dew,
            },
          }
        }
      };
    case sessionTypes.UPDATE_BACK_LEFT_PAW_OUTCOME:
      return {
        ...state,
        backLeft: {
          ...state.backLeft,
          claws: {
            first: {
              ...state.backLeft.claws.first,
              outcome: action.outcomes.first,
            },
            second: {
              ...state.backLeft.claws.second,
              outcome: action.outcomes.second,
            },
            third: {
              ...state.backLeft.claws.third,
              outcome: action.outcomes.third,
            },
            fourth: {
              ...state.backLeft.claws.fourth,
              outcome: action.outcomes.fourth,
            }
          }
        }
      };
    case sessionTypes.UPDATE_BACK_RIGHT_PAW_OUTCOME:
      return {
        ...state,
        backRight: {
          ...state.backRight,
          claws: {
            first: {
              ...state.backRight.claws.first,
              outcome: action.outcomes.first,
            },
            second: {
              ...state.backRight.claws.second,
              outcome: action.outcomes.second,
            },
            third: {
              ...state.backRight.claws.third,
              outcome: action.outcomes.third,
            },
            fourth: {
              ...state.backRight.claws.fourth,
              outcome: action.outcomes.fourth,
            }
          }
        }
      };
    case sessionTypes.UPDATE_FRONT_LEFT_PAW_BEHAVIOR:
      return {
        ...state,
        frontLeft: {
          ...state.frontLeft,
          claws: {
            first: {
              ...state.frontLeft.claws.first,
              behaviour: action.behaviours.first,
            },
            second: {
              ...state.frontLeft.claws.second,
              behaviour: action.behaviours.second,
            },
            third: {
              ...state.frontLeft.claws.third,
              behaviour: action.behaviours.third,
            },
            fourth: {
              ...state.frontLeft.claws.fourth,
              behaviour: action.behaviours.fourth,
            },
            dew: {
              ...state.frontLeft.claws.dew,
              behaviour: action.behaviours.dew,
            },
          }
        }
      };
    case sessionTypes.UPDATE_FRONT_RIGHT_PAW_BEHAVIOR:
      return {
        ...state,
        frontRight: {
          ...state.frontRight,
          claws: {
            first: {
              ...state.frontRight.claws.first,
              behaviour: action.behaviours.first,
            },
            second: {
              ...state.frontRight.claws.second,
              behaviour: action.behaviours.second,
            },
            third: {
              ...state.frontRight.claws.third,
              behaviour: action.behaviours.third,
            },
            fourth: {
              ...state.frontRight.claws.fourth,
              behaviour: action.behaviours.fourth,
            },
            dew: {
              ...state.frontRight.claws.dew,
              behaviour: action.behaviours.dew,
            },
          }
        }
      };
    case sessionTypes.UPDATE_BACK_LEFT_PAW_BEHAVIOR:
      return {
        ...state,
        backLeft: {
          ...state.backLeft,
          claws: {
            first: {
              ...state.backLeft.claws.first,
              behaviour: action.behaviours.first,
            },
            second: {
              ...state.backLeft.claws.second,
              behaviour: action.behaviours.second,
            },
            third: {
              ...state.backLeft.claws.third,
              behaviour: action.behaviours.third,
            },
            fourth: {
              ...state.backLeft.claws.fourth,
              behaviour: action.behaviours.fourth,
            }
          }
        }
      };
    case sessionTypes.UPDATE_BACK_RIGHT_PAW_BEHAVIOR:
      return {
        ...state,
        backRight: {
          ...state.backRight,
          claws: {
            first: {
              ...state.backRight.claws.first,
              behaviour: action.behaviours.first,
            },
            second: {
              ...state.backRight.claws.second,
              behaviour: action.behaviours.second,
            },
            third: {
              ...state.backRight.claws.third,
              behaviour: action.behaviours.third,
            },
            fourth: {
              ...state.backRight.claws.fourth,
              behaviour: action.behaviours.fourth,
            }
          }
        }
      };
    case sessionTypes.COMPLETE_FRONT_LEFT_PAW:
      return {
        ...state,
        frontLeft: {
          ...state.frontLeft,
          complete: action.complete
        }
      };
    case sessionTypes.COMPLETE_FRONT_RIGHT_PAW:
      return {
        ...state,
        frontRight: {
          ...state.frontRight,
          complete: action.complete
        }
      };
    case sessionTypes.COMPLETE_BACK_LEFT_PAW:
      return {
        ...state,
        backLeft: {
          ...state.backLeft,
          complete: action.complete
        }
      };
    case sessionTypes.COMPLETE_BACK_RIGHT_PAW:
      return {
        ...state,
        backRight: {
          ...state.backRight,
          complete: action.complete
        }
      };
    case sessionTypes.UPDATE_NEW_SESSION_PET_ID:
      return {
        ...state,
        pet: {
          ...state.pet,
          id: action.petId
        }
      };
    case sessionTypes.FINISH_SESSION:
      return {
        ...INITIAL_STATE
      };
    default:
      return state;
  }
};

export default sessionReducer;