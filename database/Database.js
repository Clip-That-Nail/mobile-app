import Connection from './Connection';

/**
 * https://blog.gennady.pp.ua/wrapper-for-expo-sqlite-with-async-await-migrations-and-transactions-support/
 */
class Database {
    constructor(name = "main", { prepareConnFn, migrateFn } = {}) {
        this._dbName = name;
        this._connection = new Connection(this._dbName);
        this._params = { prepareConnFn, migrateFn };

        this._prepareConnectionPromise =
            typeof this._params.prepareConnFn === "function"
                ? this._params.prepareConnFn(this._connection)
                : Promise.resolve();

        const performMigration = async () => {
            const connection = new Connection(this._dbName);
            await this._params.migrateFn(connection);
            connection.close();
        };

        this._migrationPromise =
            typeof this._params.migrateFn === "function"
                ? performMigration()
                : Promise.resolve();
    }

    async execute(sqlQuery, args = []) {
        await this._prepareConnectionPromise;
        await this._migrationPromise;

        return await this._connection.execute(sqlQuery, args);
    }

    async transaction(cb) {
        await this._prepareConnectionPromise;
        await this._migrationPromise;
        const connection = new Connection(this._dbName);
        if (typeof this._params.prepareConnFn === "function") {
            await this._params.prepareConnFn(connection);
        }
        try {
            await connection.beginTransaction();
            try {
                await cb(connection);
                await connection.commitTransaction();
            } catch (e) {
                await connection.rollbackTransaction();
                throw e;
            }
        } catch (e) {
            connection.close();
            throw e;
        }
        await connection.close();
    }

    close() {
        this._connection._db.close();
    }
}

export default Database;