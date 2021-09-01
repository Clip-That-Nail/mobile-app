import sessionsTypes from '../types/sessions';
import { fetchSessions, insertSession } from '../../helpers/db';

export const loadSessions = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchSessions();
      dispatch({ type: sessionsTypes.SET_SESSIONS, sessions: dbResult.rows._array });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};

export const addSession = (dogId, paws) => {
  return async (dispatch) => {
    try {
      const dbResult = await insertSession(dogId, paws);
      console.log('addDog result:', dbResult);

      dispatch({ type: sessionsTypes.ADD_SESSION, sessionData: { id: dbResult.insertId, paws } });
    } catch (err) {
      console.log('addDog error:', err);
      throw err;
    }
  }
};