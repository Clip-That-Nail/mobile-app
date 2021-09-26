import sessionTypes from '../types/newSession';
import { insertSession } from '../../helpers/db';

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

/**
 * Update front left paw's claws outcomes
 * 
 * @param {object} outcomes The paw's claws outcomes
 * @returns {object} update status action
 */
export const updateFrontLeftPawOutcomes = (outcomes) => {
  return { type: sessionTypes.UPDATE_FRONT_LEFT_PAW_OUTCOME, outcomes: outcomes };
};

/**
 * Update front right paw's claws outcomes
 * 
 * @param {object} outcomes The paw's claws outcomes
 * @returns {object} update status action
 */
export const updateFrontRightPawOutcomes = (outcomes) => {
  return { type: sessionTypes.UPDATE_FRONT_RIGHT_PAW_OUTCOME, outcomes: outcomes };
};

/**
 * Update back left paw's claws outcomes
 * 
 * @param {object} outcomes The paw's claws outcomes
 * @returns {object} update status action
 */
export const updateBackLeftPawOutcomes = (outcomes) => {
  return { type: sessionTypes.UPDATE_BACK_LEFT_PAW_OUTCOME, outcomes: outcomes };
};

/**
 * Update back right paw's claws outcomes
 * 
 * @param {object} outcomes The paw's claws outcomes
 * @returns {object} update status action
 */
export const updateBackRightPawOutcomes = (outcomes) => {
  return { type: sessionTypes.UPDATE_BACK_RIGHT_PAW_OUTCOME, outcomes: outcomes };
};

/**
 * Update front left paw's claws behaviours
 * 
 * @param {object} behaviours The paw's claws behaviours
 * @returns {object} update status action
 */
export const updateFrontLeftPawBehaviours = (behaviours) => {
  return { type: sessionTypes.UPDATE_FRONT_LEFT_PAW_BEHAVIOR, behaviours: behaviours };
};

/**
 * Update front right paw's claws behaviours
 * 
 * @param {object} behaviours The paw's claws behaviours
 * @returns {object} update status action
 */
export const updateFrontRightPawBehaviours = (behaviours) => {
  return { type: sessionTypes.UPDATE_FRONT_RIGHT_PAW_BEHAVIOR, behaviours: behaviours };
};

/**
 * Update back left paw's claws behaviours
 * 
 * @param {object} behaviours The paw's claws behaviours
 * @returns {object} update status action
 */
export const updateBackLeftPawBehaviours = (behaviours) => {
  return { type: sessionTypes.UPDATE_BACK_LEFT_PAW_BEHAVIOR, behaviours: behaviours };
};

/**
 * Update back right paw's claws behaviours
 * 
 * @param {object} behaviours The paw's claws behaviours
 * @returns {object} update status action
 */
export const updateBackRightPawBehaviours = (behaviours) => {
  return { type: sessionTypes.UPDATE_BACK_RIGHT_PAW_BEHAVIOR, behaviours: behaviours };
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

export const updateNewSessionPetId = (petId) => {
  return { type: sessionTypes.UPDATE_NEW_SESSION_PET_ID, petId };
};

export const finishSession = (status) => {
  return async (dispatch, getState) => {
    const petId = getState().newSession.pet.id;
    const frontLeftPawClaws = getState().newSession.frontLeftPaw.claws;
    const frontRightPawClaws = getState().newSession.frontRightPaw.claws;
    const backLeftPawClaws = getState().newSession.backLeftPaw.claws;
    const backRightPawClaws = getState().newSession.backRightPaw.claws;
    
    try {
      const sessionData = {
        frontLeft: frontLeftPawClaws,
        frontRight: frontRightPawClaws,
        backLeft: backLeftPawClaws,
        backRight: backRightPawClaws,
      };

      console.log('[insertSession sessionData]', sessionData);
      const dbResult = await insertSession(petId, status, sessionData);
      console.log('[insertSession result]', dbResult);
      dispatch({ type: sessionTypes.FINISH_SESSION });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};