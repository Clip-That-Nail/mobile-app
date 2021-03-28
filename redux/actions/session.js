import sessionTypes from '../types/session';

export const updateFrontLeftPaw = (pawData) => {
  return { type: sessionTypes.UPDATE_FRONT_LEFT_PAW, pawData: pawData };
};

export const updateFrontRightPaw = (pawData) => {
  return { type: sessionTypes.UPDATE_FRONT_RIGHT_PAW, pawData: pawData };
};

export const updateBackLeftPaw = (pawData) => {
  return { type: sessionTypes.UPDATE_BACK_LEFT_PAW, pawData: pawData };
};

export const updateBackRightPaw = (pawData) => {
  return { type: sessionTypes.UPDATE_BACK_RIGHT_PAW, pawData: pawData };
};

export const updateCompleteFrontLeftPaw = (complete) => {
  return { type: sessionTypes.COMPLETE_FRONT_LEFT_PAW, complete: complete };
};

export const updateCompleteFrontRightPaw = (complete) => {
  return { type: sessionTypes.COMPLETE_FRONT_RIGHT_PAW, complete: complete };
};

export const updateCompleteBackLeftPaw = (complete) => {
  return { type: sessionTypes.COMPLETE_BACK_LEFT_PAW, complete: complete };
};

export const updateCompleteBackRightPaw = (complete) => {
  return { type: sessionTypes.COMPLETE_BACK_RIGHT_PAW, complete: complete };
};