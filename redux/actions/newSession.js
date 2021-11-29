import newSessionTypes from '../types/newSession';
import { insertSession } from '../../helpers/db';

/**
 * Update front left paw status
 * 
 * @param {object} pawData The paw's claws statuses
 * @returns {object} update status action
 */
export const updateFrontLeftPawStatus = (pawData) => {
  return { type: newSessionTypes.UPDATE_FRONT_LEFT_PAW_STATUS, pawData: pawData };
};

/**
 * Update front right paw status
 * 
 * @param {object} pawData The paw's claws statuses
 * @returns {object} update status action
 */
export const updateFrontRightPawStatus = (pawData) => {
  return { type: newSessionTypes.UPDATE_FRONT_RIGHT_PAW_STATUS, pawData: pawData };
};

/**
 * Update back left paw status
 * 
 * @param {object} pawData The paw's claws statuses
 * @returns {object} update status action
 */
export const updateBackLeftPawStatus = (pawData) => {
  return { type: newSessionTypes.UPDATE_BACK_LEFT_PAW_STATUS, pawData: pawData };
};

/**
 * Update back right paw status
 * 
 * @param {object} pawData The paw's claws statuses
 * @returns {object} update status action
 */
export const updateBackRightPawStatus = (pawData) => {
  return { type: newSessionTypes.UPDATE_BACK_RIGHT_PAW_STATUS, pawData: pawData };
};

/**
 * Update front left paw's claws outcomes
 * 
 * @param {object} outcomes The paw's claws outcomes
 * @returns {object} update status action
 */
export const updateFrontLeftPawOutcomes = (outcomes) => {
  return { type: newSessionTypes.UPDATE_FRONT_LEFT_PAW_OUTCOME, outcomes: outcomes };
};

/**
 * Update front right paw's claws outcomes
 * 
 * @param {object} outcomes The paw's claws outcomes
 * @returns {object} update status action
 */
export const updateFrontRightPawOutcomes = (outcomes) => {
  return { type: newSessionTypes.UPDATE_FRONT_RIGHT_PAW_OUTCOME, outcomes: outcomes };
};

/**
 * Update back left paw's claws outcomes
 * 
 * @param {object} outcomes The paw's claws outcomes
 * @returns {object} update status action
 */
export const updateBackLeftPawOutcomes = (outcomes) => {
  return { type: newSessionTypes.UPDATE_BACK_LEFT_PAW_OUTCOME, outcomes: outcomes };
};

/**
 * Update back right paw's claws outcomes
 * 
 * @param {object} outcomes The paw's claws outcomes
 * @returns {object} update status action
 */
export const updateBackRightPawOutcomes = (outcomes) => {
  return { type: newSessionTypes.UPDATE_BACK_RIGHT_PAW_OUTCOME, outcomes: outcomes };
};

/**
 * Update front left paw's claws behaviours
 * 
 * @param {object} behaviours The paw's claws behaviours
 * @returns {object} update status action
 */
export const updateFrontLeftPawBehaviours = (behaviours) => {
  return { type: newSessionTypes.UPDATE_FRONT_LEFT_PAW_BEHAVIOR, behaviours: behaviours };
};

/**
 * Update front right paw's claws behaviours
 * 
 * @param {object} behaviours The paw's claws behaviours
 * @returns {object} update status action
 */
export const updateFrontRightPawBehaviours = (behaviours) => {
  return { type: newSessionTypes.UPDATE_FRONT_RIGHT_PAW_BEHAVIOR, behaviours: behaviours };
};

/**
 * Update back left paw's claws behaviours
 * 
 * @param {object} behaviours The paw's claws behaviours
 * @returns {object} update status action
 */
export const updateBackLeftPawBehaviours = (behaviours) => {
  return { type: newSessionTypes.UPDATE_BACK_LEFT_PAW_BEHAVIOR, behaviours: behaviours };
};

/**
 * Update back right paw's claws behaviours
 * 
 * @param {object} behaviours The paw's claws behaviours
 * @returns {object} update status action
 */
export const updateBackRightPawBehaviours = (behaviours) => {
  return { type: newSessionTypes.UPDATE_BACK_RIGHT_PAW_BEHAVIOR, behaviours: behaviours };
};



export const updateCompleteFrontLeftPaw = (complete) => {
  return { type: newSessionTypes.COMPLETE_FRONT_LEFT_PAW, complete: complete };
};

export const updateCompleteFrontRightPaw = (complete) => {
  return { type: newSessionTypes.COMPLETE_FRONT_RIGHT_PAW, complete: complete };
};

export const updateCompleteBackLeftPaw = (complete) => {
  return { type: newSessionTypes.COMPLETE_BACK_LEFT_PAW, complete: complete };
};

export const updateCompleteBackRightPaw = (complete) => {
  return { type: newSessionTypes.COMPLETE_BACK_RIGHT_PAW, complete: complete };
};

export const updateNewSessionPetId = (petId) => {
  return { type: newSessionTypes.UPDATE_NEW_SESSION_PET_ID, petId };
};

export const finishSession = (status) => {
  return async (dispatch, getState) => {
    const petId = getState().newSession.pet.id;
    const pet = getState().pets.pets.find(pet => pet.id === petId);
    const frontLeftPawClaws = getState().newSession.frontLeft.claws;
    const frontRightPawClaws = getState().newSession.frontRight.claws;
    const backLeftPawClaws = getState().newSession.backLeft.claws;
    const backRightPawClaws = getState().newSession.backRight.claws;

    try {
      const sessionData = {
        frontLeft: frontLeftPawClaws,
        frontRight: frontRightPawClaws,
        backLeft: backLeftPawClaws,
        backRight: backRightPawClaws,
      };

      console.log('[insertSession sessionData]', sessionData);
      const sessionId = await insertSession(petId, status, sessionData);
      console.log('[insertSession sessionId]', sessionId);
      dispatch({ type: newSessionTypes.FINISH_SESSION, sessionData: { id: sessionId, status, pet, paws: sessionData } });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};

export const prepareEditSession = (session) => {
  return async (dispatch) => {
    const frontLeftComplete = Object.keys(session.frontLeft).filter((key) => session.frontLeft[key].behaviour === 'not-selected') > 0;
    const frontRightComplete = Object.keys(session.frontRight).filter((key) => session.frontRight[key].behaviour === 'not-selected') > 0;
    const backLeftComplete = Object.keys(session.backLeft).filter((key) => session.backLeft[key].behaviour === 'not-selected') > 0;
    const backRightComplete = Object.keys(session.backRight).filter((key) => session.backRight[key].behaviour === 'not-selected') > 0;

    const sessionData = {
      pet: {
        id: session.pet.id,
      },
      frontLeft: {
        complete: frontLeftComplete,
        claws: session.frontLeft
      },
      frontRight: {
        complete: frontRightComplete,
        claws: session.frontRight
      },
      backLeft: {
        complete: backLeftComplete,
        claws: session.backLeft
      },
      backRight: {
        complete: backRightComplete,
        claws: session.backRight
      },
    };

    dispatch({ type: newSessionTypes.EDIT_SESSION, sessionData });
  }
};