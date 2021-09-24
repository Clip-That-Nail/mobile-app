import sessionsTypes from '../types/sessions';
import { fetchSessions, insertSession } from '../../helpers/db';

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

export const addSession = (petId, paws) => {
  return async (dispatch) => {
    try {
      const dbResult = await insertSession(petId, paws);
      console.log('addPet result:', dbResult);

      dispatch({ type: sessionsTypes.ADD_SESSION, sessionData: { id: dbResult.insertId, paws } });
    } catch (err) {
      console.log('addPet error:', err);
      throw err;
    }
  }
};