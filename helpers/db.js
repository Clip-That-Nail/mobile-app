import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('clipThatNail.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS dogs (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, breed TEXT NOT NULL);');
      tx.executeSql('CREATE TABLE IF NOT EXISTS sessions (id INTEGER PRIMARY KEY NOT NULL, dogId INTEGER NOT NULL, createDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP);');
      tx.executeSql('CREATE TABLE IF NOT EXISTS paws (id INTEGER PRIMARY KEY NOT NULL, sessionId INTEGER NOT NULL, type TEXT NOT NULL, status TEXT NOT NULL, outcome TEXT NOT NULL, behaviour TEXT NOT NULL);');
    }).then(() => {
      resolve();
    }).catch(error => {
      reject(error);
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
          tx.executeSql(
            'INSERT INTO paws (sessionId, type, status, outcome, behaviour) VALUES (?,?,?,?,?)',
            [result.insertId, 'frontLeft', paws.frontLeft.status, paws.frontLeft.outcome, paws.frontLeft.behaviour],
            pawInsertSuccess,
            pawInsertFail
          );
          // frontRight paw
          tx.executeSql(
            'INSERT INTO paws (sessionId, type, status, outcome, behaviour) VALUES (?,?,?,?,?)',
            [result.insertId, 'frontRight', paws.frontRight.status, paws.frontRight.outcome, paws.frontRight.behaviour],
            pawInsertSuccess,
            pawInsertFail
          );
          // backLeft paw
          tx.executeSql(
            'INSERT INTO paws (sessionId, type, status, outcome, behaviour) VALUES (?,?,?,?,?)',
            [result.insertId, 'backLeft', paws.backLeft.status, paws.backLeft.outcome, paws.backLeft.behaviour],
            pawInsertSuccess,
            pawInsertFail
          );
          // backRight paw
          tx.executeSql(
            'INSERT INTO paws (sessionId, type, status, outcome, behaviour) VALUES (?,?,?,?,?)',
            [result.insertId, 'backRight', paws.backRight.status, paws.backRight.outcome, paws.backRight.behaviour],
            pawInsertSuccess,
            pawInsertFail
          );
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