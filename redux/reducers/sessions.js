import sessionsTypes from '../types/sessions';
import newSessionsTypes from '../types/newSession';
import Session from '../../models/session';

const initialState = {
  sessions: []
}

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case sessionsTypes.SET_SESSIONS:
      return {
        sessions: action.sessions.map(session => new Session(session.id, session.status, session.createDate, session.pet, session.frontLeft, session.frontRight, session.backLeft, session.backRight))
      }
    case newSessionsTypes.FINISH_SESSION:
      const newSession = new Session(
        action.sessionData.id,
        action.sessionData.status,
        Date.now(),
        action.sessionData.pet,
        action.sessionData.paws.frontLeft,
        action.sessionData.paws.frontRight,
        action.sessionData.paws.backLeft,
        action.sessionData.paws.backRight,
      );
      return {
        sessions: state.sessions.concat(newSession)
      }
    // case sessionsTypes.ADD_SESSION:
    //   const newSession = new Session(
    //     action.sessionData.id.toString(),
    //     action.sessionData.status,
    //     Date.now(),
    //     action.sessionData.paws.frontLeft,
    //     action.sessionData.paws.frontRight,
    //     action.sessionData.paws.backLeft,
    //     action.sessionData.paws.backRight,
    //   );
    //   return {
    //     sessions: state.sessions.concat(newSession)
    //   }
    default:
      return state;
  }
};

export default sessionReducer;