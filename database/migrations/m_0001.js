export default async function (connection) {
  await connection.execute(
    `CREATE TABLE IF NOT EXISTS pets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      type TEXT NOT NULL,
      breed TEXT NOT NULL,
      imageUri TEXT NOT NULL
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

  // TODO: image files do not work, because cache and storage was cleared 
  await connection.execute(`INSERT INTO pets (name, type, breed, imageUri) VALUES (?,?,?,?)`, ['Narcyz', 'dog', 'Mix', 'file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540pawelbak%252Fclip-that-nail-app/d97cd91d-a3d0-4c27-9bc1-bdaca19f0756.jpg']);
  await connection.execute(`INSERT INTO pets (name, type, breed, imageUri) VALUES (?,?,?,?)`, ['Laika', 'dog', 'Whippet', 'file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540pawelbak%252Fclip-that-nail-app/d97cd91d-a3d0-4c27-9bc1-bdaca19f0756.jpg']);
  await connection.execute(`INSERT INTO pets (name, type, breed, imageUri) VALUES (?,?,?,?)`, ['Amon', 'cat', 'Persian', 'file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540pawelbak%252Fclip-that-nail-app/5fb563b8-27fb-47d9-87fd-82b474ae5351.jpg']);
  await connection.execute(`INSERT INTO pets (name, type, breed, imageUri) VALUES (?,?,?,?)`, ['Cookie', 'dog', 'Mix', 'file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540pawelbak%252Fclip-that-nail-app/d97cd91d-a3d0-4c27-9bc1-bdaca19f0756.jpg']);
  await connection.execute(`INSERT INTO pets (name, type, breed, imageUri) VALUES (?,?,?,?)`, ['Fender', 'cat', 'Maine Coon', 'file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540pawelbak%252Fclip-that-nail-app/5fb563b8-27fb-47d9-87fd-82b474ae5351.jpg']);

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