// Update with your config settings.

module.exports = {
  developmentFront: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "helppet",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    useNullAsDefault: true,
  },

  developmentBack: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "123456",
      database: "helppet test",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    useNullAsDefault: true,
  },

  production: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "helppet",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
