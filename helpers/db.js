import db from '../database/db';

// export const init = () => {
//   const promise = new Promise((resolve, reject) => {
//     db.transaction((tx) => {
//       // tx.executeSql('DROP TABLE animals;', [], () => { }, (_, err) => { reject(err); });
//       // tx.executeSql('DROP TABLE sessions;', [], () => { }, (_, err) => { reject(err); });
//       // tx.executeSql('DROP TABLE claws;', [], () => { }, (_, err) => { reject(err); });
//       tx.executeSql('CREATE TABLE IF NOT EXISTS animals (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, breed TEXT NOT NULL, imageUri TEXT NOT NULL);', [], () => { }, (_, err) => { reject(err); });
//       tx.executeSql('CREATE TABLE IF NOT EXISTS sessions (id INTEGER PRIMARY KEY NOT NULL, animalId INTEGER NOT NULL, createDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP);', [], () => { }, (_, err) => { reject(err); });
//       tx.executeSql('CREATE TABLE IF NOT EXISTS claws (id INTEGER PRIMARY KEY NOT NULL, sessionId INTEGER NOT NULL, paw TEXT NOT NULL, claw TEXT NOT NULL, status TEXT NOT NULL, outcome TEXT NOT NULL, behaviour TEXT NOT NULL);', [], () => { }, (_, err) => { reject(err); });
//       resolve();
//     });
//   });
//   return promise;
// };

export const insertAnimal = async (name, type, breed, imageUri) => {
  let result;

  await db.transaction(async connection => {
    result = await connection.execute('INSERT INTO animals (name, type, breed, imageUri) VALUES (?,?,?,?)', [name, type, breed, imageUri]);
  });

  return result;
}

export const updateAnimal = async (animalId, name, type, breed, imageUri) => {
  let result;

  await db.transaction(async connection => {
    result = await connection.execute(`
    UPDATE animals
    SET name = ?, type = ?, breed = ?, imageUri = ?
    WHERE id = ?`, [name, type, breed, imageUri, animalId]);
  });

  return result;
}

export const fetchAnimals = async () => {
  let result;

  await db.transaction(async connection => {
    result = await connection.execute('SELECT * FROM animals');
  });

  return result;
}

export const insertSession = async (animalId, paws) => {
  await db.transaction(async connection => {
    const sessionResult = await connection.execute('INSERT INTO sessions (animalId) VALUES (?)', [animalId]);

    // frontLeft paw
    Object.keys(paws.frontLeft).map(async (key, index) => {
      const claw = paws.frontLeft[key];
      try {
        const clawsResult = await connection.execute(
          'INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)',
          [sessionResult.insertId, 'frontLeft', key, claw.status, claw.outcome, claw.behaviour]
        );
        pawInsertSuccess(clawsResult);
      } catch (error) {
        pawInsertFail(error);
      }
    });

    // frontRight paw
    Object.keys(paws.frontRight).map(async (key, index) => {
      const claw = paws.frontRight[key];
      try {
        const clawsResult = await connection.execute(
          'INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)',
          [sessionResult.insertId, 'frontRight', key, claw.status, claw.outcome, claw.behaviour]
        );
        pawInsertSuccess(clawsResult);
      } catch (error) {
        pawInsertFail(error);
      }
    });

    // backLeft paw
    Object.keys(paws.backLeft).map(async (key, index) => {
      const claw = paws.backLeft[key];
      try {
        const clawsResult = await connection.execute(
          'INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)',
          [sessionResult.insertId, 'backLeft', key, claw.status, claw.outcome, claw.behaviour]
        );
        pawInsertSuccess(clawsResult);
      } catch (error) {
        pawInsertFail(error);
      }
    });

    // backRight paw
    Object.keys(paws.backRight).map(async (key, index) => {
      const claw = paws.backRight[key];
      try {
        const clawsResult = await connection.execute(
          'INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)',
          [sessionResult.insertId, 'backRight', key, claw.status, claw.outcome, claw.behaviour]
        );
        pawInsertSuccess(clawsResult);
      } catch (error) {
        pawInsertFail(error);
      }
    });
  });
}

export const fetchSessions = async () => {
  let sessions = {};

  const clawsResult = await db.execute(`
    SELECT claws.id AS clawId, sessions.id AS sessionId, animals.id AS animalId, *
    FROM claws
    JOIN sessions ON sessions.id = claws.sessionId
    JOIN animals ON animals.id = sessions.animalId
    ORDER BY sessions.createDate
  `);

  // console.log('clawsResult', clawsResult.rows);

  for (const key in clawsResult.rows) {
    const claw = clawsResult.rows[key];

    // console.log('claw', claw);

    sessions[claw.sessionId] = {
      ...sessions[claw.sessionId],
      id: claw.sessionId,
      createDate: claw.createDate,
      animal: {
        id: claw.animalId,
        name: claw.name,
        breed: claw.breed,
        imageUri: claw.imageUri,
      },
      [claw.paw]: {
        ...(sessions[claw.sessionId] && sessions[claw.sessionId][claw.paw]),
        [claw.claw]: {
          id: claw.clawId,
          status: claw.status,
          outcome: claw.outcome,
          behaviour: claw.behaviour
        }
      }
    };
  }
  // console.log('sessions', sessions);

  return Object.values(sessions); // Convert session object to array
}

const pawInsertSuccess = (result) => {
  console.log(`paw (${result.insertId}) insert success`);
}

const pawInsertFail = (err) => {
  console.log('paw insert fail, err.message: ' + err.message);
}