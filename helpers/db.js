import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('clipThatNail.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS dogs (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, breed TEXT NOT NULL);', [], () => { }, (_, err) => { reject(err); });
      tx.executeSql('CREATE TABLE IF NOT EXISTS sessions (id INTEGER PRIMARY KEY NOT NULL, dogId INTEGER NOT NULL, createDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP);', [], () => { }, (_, err) => { reject(err); });
      tx.executeSql('CREATE TABLE IF NOT EXISTS claws (id INTEGER PRIMARY KEY NOT NULL, sessionId INTEGER NOT NULL, paw TEXT NOT NULL, claw TEXT NOT NULL, status TEXT NOT NULL, outcome TEXT NOT NULL, behaviour TEXT NOT NULL);', [], () => { }, (_, err) => { reject(err); });
      resolve();
    });
  });
  return promise;
};

export const insertDog = (name, breed) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql('INSERT INTO dogs (name, breed) VALUES (?,?)',
        [name, breed],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
}

export const insertSession = (dogId, paws) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql('INSERT INTO sessions (dogId) VALUES (?)',
        [dogId],
        (_, result) => {
          // frontLeft paw
          Object.keys(paws.frontLeft).map((key, index) => {
            const claw = paws.frontLeft[key];
            tx.executeSql(
              'INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)',
              [result.insertId, 'frontLeft', key, claw.status, claw.outcome, claw.behaviour],
              pawInsertSuccess,
              pawInsertFail
            );
          });
          // frontRight paw
          Object.keys(paws.frontRight).map((key, index) => {
            const claw = paws.frontRight[key];
            tx.executeSql(
              'INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)',
              [result.insertId, 'frontRight', key, claw.status, claw.outcome, claw.behaviour],
              pawInsertSuccess,
              pawInsertFail
            );
          });
          // backLeft paw
          Object.keys(paws.backLeft).map((key, index) => {
            const claw = paws.backLeft[key];
            tx.executeSql(
              'INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)',
              [result.insertId, 'backLeft', key, claw.status, claw.outcome, claw.behaviour],
              pawInsertSuccess,
              pawInsertFail
            );
          });
          // backRight paw
          Object.keys(paws.backRight).map((key, index) => {
            const claw = paws.backRight[key];
            tx.executeSql(
              'INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)',
              [result.insertId, 'backRight', key, claw.status, claw.outcome, claw.behaviour],
              pawInsertSuccess,
              pawInsertFail
            );
          });
        },
        (_, err) => {
          reject(err);
        }
      );
    }).then(() => {
      resolve();
    }).catch(error => {
      reject(error);
    });
  });
  return promise;
}

const pawInsertSuccess = () => {
  console.log('paw insert success');
}

const pawInsertFail = (err) => {
  console.log('paw insert fail, err.message: ' + err.message);
}

// export const fetchPlaces = () => {
//   const promise = new Promise((resolve, reject) => {
//     db.transaction((tx) => {
//       tx.executeSql('SELECT * FROM places',
//         [],
//         (_, result) => {
//           resolve(result);
//         },
//         (_, err) => {
//           reject(err);
//         }
//       );
//     });
//   });
//   return promise;
// }