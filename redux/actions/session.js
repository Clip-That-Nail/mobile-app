import sessionTypes from '../types/session';

/**
 * Update front left paw status
 * 
 * @param {object} pawData The paw's claws statuses
 * @returns {object} update status action
 */
export const updateFrontLeftPawStatus = (pawData) => {
  return { type: sessionTypes.UPDATE_FRONT_LEFT_PAW_STATUS, pawData: pawData };
};

/**
 * Update front right paw status
 * 
 * @param {object} pawData The paw's claws statuses
 * @returns {object} update status action
 */
export const updateFrontRightPawStatus = (pawData) => {
  return { type: sessionTypes.UPDATE_FRONT_RIGHT_PAW_STATUS, pawData: pawData };
};

/**
 * Update back left paw status
 * 
 * @param {object} pawData The paw's claws statuses
 * @returns {object} update status action
 */
export const updateBackLeftPawStatus = (pawData) => {
  return { type: sessionTypes.UPDATE_BACK_LEFT_PAW_STATUS, pawData: pawData };
};

/**
 * Update back right paw status
 * 
 * @param {object} pawData The paw's claws statuses
 * @returns {object} update status action
 */
export const updateBackRightPawStatus = (pawData) => {
  return { type: sessionTypes.UPDATE_BACK_RIGHT_PAW_STATUS, pawData: pawData };
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