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
      host: "	klbcedmmqp7w17ik.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      user: "tk1bvtwkz3da78gi",
      password: "b72jezaie24csz4d",
      database: "ynp1hbj3mxi05pu7",
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
