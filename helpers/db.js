import db from '../database/db';

// export const init = () => {
//   const promise = new Promise((resolve, reject) => {
//     db.transaction((tx) => {
//       // tx.executeSql('DROP TABLE pets;', [], () => { }, (_, err) => { reject(err); });
//       // tx.executeSql('DROP TABLE sessions;', [], () => { }, (_, err) => { reject(err); });
//       // tx.executeSql('DROP TABLE claws;', [], () => { }, (_, err) => { reject(err); });
//       tx.executeSql('CREATE TABLE IF NOT EXISTS pets (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, breed TEXT NOT NULL, imageUri TEXT NOT NULL);', [], () => { }, (_, err) => { reject(err); });
//       tx.executeSql('CREATE TABLE IF NOT EXISTS sessions (id INTEGER PRIMARY KEY NOT NULL, petId INTEGER NOT NULL, createDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP);', [], () => { }, (_, err) => { reject(err); });
//       tx.executeSql('CREATE TABLE IF NOT EXISTS claws (id INTEGER PRIMARY KEY NOT NULL, sessionId INTEGER NOT NULL, paw TEXT NOT NULL, claw TEXT NOT NULL, status TEXT NOT NULL, outcome TEXT NOT NULL, behaviour TEXT NOT NULL);', [], () => { }, (_, err) => { reject(err); });
//       resolve();
//     });
//   });
//   return promise;
// };

export const insertPet = async (name, type, breed, imageUri, disabled) => {
  let result;

  await db.transaction(async connection => {
    result = await connection.execute('INSERT INTO pets (name, type, breed, imageUri, disabled) VALUES (?,?,?,?,?)', [name, type, breed, imageUri, disabled]);
  });

  return result;
}

export const updatePet = async (petId, name, type, breed, imageUri, disabled) => {
  let result;

  await db.transaction(async connection => {
    result = await connection.execute(`
    UPDATE pets
    SET name = ?, type = ?, breed = ?, imageUri = ?, disabled = ?
    WHERE id = ?`, [name, type, breed, imageUri, disabled, petId]);
  });

  return result;
}

export const removePet = async (petId) => {
  let result;

  await db.transaction(async connection => {
    result = await connection.execute(`DELETE FROM pets WHERE id = ?`, [petId]);
  });

  // TODO: should I remove all pet related data like disabilities, skips, sessions etc.?

  return result;
}

export const fetchPets = async () => {
  let pets = {};

  await db.transaction(async connection => {
    const petsResult = await connection.execute(`SELECT * FROM pets`);

    for (const key in petsResult.rows) {
      const pet = petsResult.rows[key];

      const disabilitiesResult = await connection.execute(`SELECT * FROM disabilities WHERE petId = ${pet.id}`);

      pets[pet.id] = {
        ...pet,
        disabilities: disabilitiesResult.rows
      };

    }
  });

  return Object.values(pets);
}

export const insertSession = async (petId, status, paws) => {
  let sessionId;

  await db.transaction(async connection => {
    const sessionResult = await connection.execute('INSERT INTO sessions (petId,status) VALUES (?,?)', [petId, status]);

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

    sessionId = sessionResult.insertId;
  });

  return sessionId;
}

export const fetchSessions = async () => {
  let sessions = {};

  const clawsResult = await db.execute(`
    SELECT claws.id AS clawId, claws.status AS clawStatus, sessions.id AS sessionId, pets.id AS petId, *
    FROM claws
    JOIN sessions ON sessions.id = claws.sessionId
    JOIN pets ON pets.id = sessions.petId
    ORDER BY sessions.createDate
  `);

  // console.log('clawsResult', clawsResult.rows);

  for (const key in clawsResult.rows) {
    const claw = clawsResult.rows[key];

    // console.log('claw', claw);

    sessions[claw.sessionId] = {
      ...sessions[claw.sessionId],
      id: claw.sessionId,
      status: claw.status,
      createDate: claw.createDate,
      pet: {
        id: claw.petId,
        name: claw.name,
        breed: claw.breed,
        imageUri: claw.imageUri,
      },
      [claw.paw]: {
        ...(sessions[claw.sessionId] && sessions[claw.sessionId][claw.paw]),
        [claw.claw]: {
          id: claw.clawId,
          status: claw.clawStatus,
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