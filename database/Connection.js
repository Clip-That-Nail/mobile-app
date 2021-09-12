import * as SQLite from "expo-sqlite";

class Connection {
  constructor(databaseName) {
    this._db = SQLite.openDatabase(databaseName);
    this.transacting = false;
  }

  execute(sqlStatement, args = []) {
    return new Promise((resolve, reject) => {
      this._db.exec([{ sql: sqlStatement, args }], false, (err, res) => {
        if (err) {
          return reject(err);
        }

        if (res[0].error) {
          return reject(res[0].error);
        }

        resolve(res[0]);
      });
    });
  }

  close() {
    this._db._db.close();
  }

  async beginTransaction() {
    await this.execute("begin transaction");
    this.transacting = true;
  }

  async commitTransaction() {
    await this.execute("commit");
    this.transacting = false;
  }

  async rollbackTransaction() {
    await this.execute("rollback");
    this.transacting = false;
  }
}

export default Connection;