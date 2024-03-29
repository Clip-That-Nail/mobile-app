export default async function (connection) {
  await connection.execute(
    `CREATE TABLE IF NOT EXISTS pets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      type TEXT NOT NULL,
      breed TEXT NOT NULL,
      imageUri TEXT NOT NULL,
      disabled INTEGER NOT NULL
    )`
  );
  await connection.execute(
    `CREATE TABLE IF NOT EXISTS disabilities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      petId INTEGER NOT NULL,
      paw TEXT NOT NULL,
      claw TEXT NOT NULL
    )`
  );
  await connection.execute(
    `CREATE TABLE IF NOT EXISTS skips (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      petId INTEGER NOT NULL,
      paw TEXT NOT NULL,
      claw TEXT NOT NULL,
      length INTEGER NOT NULL
    )`
  );
  await connection.execute(
    `CREATE TABLE IF NOT EXISTS sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      petId INTEGER NOT NULL,
      status TEXT NOT NULL,
      createDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`
  );
  await connection.execute(
    `CREATE TABLE IF NOT EXISTS claws (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sessionId INTEGER NOT NULL,
      paw TEXT NOT NULL,
      claw TEXT NOT NULL,
      status TEXT NOT NULL,
      outcome TEXT NOT NULL,
      behaviour TEXT NOT NULL
    )`
  );

  // await connection.execute(
  //   `create table users (
  //     id integer primary key autoincrement, 
  //     name text not null
  //   )`
  // );
  // await connection.execute(
  //   `create unique index uk_users_name on users (name)`
  // );
}