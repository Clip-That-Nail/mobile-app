import sessionsTypes from '../types/sessions';
import { fetchSessions, updateSession as updateSessionInDB, removeSession as removeSessionFromDB } from '../../helpers/db';

export const loadSessions = () => {
  return async (dispatch) => {
    try {
      const sessionsResult = await fetchSessions();
      dispatch({ type: sessionsTypes.SET_SESSIONS, sessions: sessionsResult });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};

export const updateSession = (sessionId, status) => {
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

      console.log('[updateSession sessionData]', sessionData);
      const result = await updateSessionInDB(sessionId, petId, status, sessionData);
      console.log('[updateSession sessionId]', result);
      dispatch({ type: sessionsTypes.UPDATE_SESSION, sessionData: { id: sessionId, status, pet, paws: sessionData } });
    } catch (err) {
      console.log('updateSession error:', err);
      throw err;
    }
  }
};

export const removeSession = (sessionId) => {
  return async (dispatch) => {
    try {
      await removeSessionFromDB(sessionId);

      dispatch({ type: sessionsTypes.REMOVE_SESSION, sessionId });
    } catch (err) {
      console.log('removeSession error:', err);
      throw err;
    }
  }
};