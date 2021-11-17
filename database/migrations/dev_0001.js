export default async function (connection) {
  // ##############  PETS  ##############
  // TODO: image files do not work, because cache and storage was cleared 
  await connection.execute(`INSERT INTO pets (name, type, breed, imageUri, disabled) VALUES (?,?,?,?,?)`, ['Narcyz', 'dog', 'Mix', 'file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540pawelbak%252Fclip-that-nail-app/d97cd91d-a3d0-4c27-9bc1-bdaca19f0756.jpg', 0]);
  await connection.execute(`INSERT INTO pets (name, type, breed, imageUri, disabled) VALUES (?,?,?,?,?)`, ['Laika', 'dog', 'Whippet', 'file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540pawelbak%252Fclip-that-nail-app/d97cd91d-a3d0-4c27-9bc1-bdaca19f0756.jpg', 0]);
  await connection.execute(`INSERT INTO pets (name, type, breed, imageUri, disabled) VALUES (?,?,?,?,?)`, ['Amon', 'cat', 'Persian', 'file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540pawelbak%252Fclip-that-nail-app/5fb563b8-27fb-47d9-87fd-82b474ae5351.jpg', 0]);
  await connection.execute(`INSERT INTO pets (name, type, breed, imageUri, disabled) VALUES (?,?,?,?,?)`, ['Scooby', 'dog', 'German Dogg', 'file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540pawelbak%252Fclip-that-nail-app/d97cd91d-a3d0-4c27-9bc1-bdaca19f0756.jpg', 0]);
  await connection.execute(`INSERT INTO pets (name, type, breed, imageUri, disabled) VALUES (?,?,?,?,?)`, ['Fender', 'cat', 'Maine Coon', 'file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540pawelbak%252Fclip-that-nail-app/5fb563b8-27fb-47d9-87fd-82b474ae5351.jpg', 0]);
  await connection.execute(`INSERT INTO pets (name, type, breed, imageUri, disabled) VALUES (?,?,?,?,?)`, ['Disabled DOGO', 'dog', 'Mix', 'file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540pawelbak%252Fclip-that-nail-app/5fb563b8-27fb-47d9-87fd-82b474ae5351.jpg', 1]);

  // ##############  SESSIONS  ##############
  await connection.execute(
    `INSERT INTO sessions (petId, status, createDate) VALUES (?,?,?)`,
    ['1', 'unfinished', '2021-09-26 12:00:00']
  );

  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'frontLeft', 'first', 'unchecked', 'not-selected', 'not-selected']
  );
  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'frontLeft', 'second', 'unchecked', 'not-selected', 'not-selected']
  );
  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'frontLeft', 'third', 'unchecked', 'not-selected', 'not-selected']
  );
  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'frontLeft', 'fourth', 'unchecked', 'not-selected', 'not-selected']
  );
  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'frontLeft', 'dew', 'unchecked', 'not-selected', 'not-selected']
  );

  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'frontRight', 'first', 'unchecked', 'not-selected', 'not-selected']
  );
  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'frontRight', 'second', 'unchecked', 'not-selected', 'not-selected']
  );
  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'frontRight', 'third', 'unchecked', 'not-selected', 'not-selected']
  );
  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'frontRight', 'fourth', 'unchecked', 'not-selected', 'not-selected']
  );
  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'frontRight', 'dew', 'unchecked', 'not-selected', 'not-selected']
  );

  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'backLeft', 'first', 'unchecked', 'not-selected', 'not-selected']
  );
  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'backLeft', 'second', 'unchecked', 'not-selected', 'not-selected']
  );
  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'backLeft', 'third', 'unchecked', 'not-selected', 'not-selected']
  );
  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'backLeft', 'fourth', 'unchecked', 'not-selected', 'not-selected']
  );
  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'backLeft', 'dew', 'unchecked', 'not-selected', 'not-selected']
  );

  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'backRight', 'first', 'unchecked', 'not-selected', 'not-selected']
  );
  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'backRight', 'second', 'unchecked', 'not-selected', 'not-selected']
  );
  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'backRight', 'third', 'unchecked', 'not-selected', 'not-selected']
  );
  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'backRight', 'fourth', 'unchecked', 'not-selected', 'not-selected']
  );
  await connection.execute(
    `INSERT INTO claws (sessionId, paw, claw, status, outcome, behaviour) VALUES (?,?,?,?,?,?)`,
    ['1', 'backRight', 'dew', 'unchecked', 'not-selected', 'not-selected']
  );

  // ##############  DISABILITIES  ##############
  await connection.execute(`INSERT INTO disabilities (petId, paw, claw) VALUES (?,?,?)`, ['6', 'frontLeft', 'dew']);
  await connection.execute(`INSERT INTO disabilities (petId, paw, claw) VALUES (?,?,?)`, ['6', 'frontRight', 'dew']);

  await connection.execute(`INSERT INTO disabilities (petId, paw, claw) VALUES (?,?,?)`, ['6', 'backLeft', 'first']);
  await connection.execute(`INSERT INTO disabilities (petId, paw, claw) VALUES (?,?,?)`, ['6', 'backLeft', 'third']);
  await connection.execute(`INSERT INTO disabilities (petId, paw, claw) VALUES (?,?,?)`, ['6', 'backLeft', 'fourth']);
  
  await connection.execute(`INSERT INTO disabilities (petId, paw, claw) VALUES (?,?,?)`, ['6', 'backRight', 'first']);
  await connection.execute(`INSERT INTO disabilities (petId, paw, claw) VALUES (?,?,?)`, ['6', 'backRight', 'second']);
  await connection.execute(`INSERT INTO disabilities (petId, paw, claw) VALUES (?,?,?)`, ['6', 'backRight', 'fourth']);
}