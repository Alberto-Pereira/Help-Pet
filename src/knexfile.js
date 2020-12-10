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
      host: "klbcedmmqp7w17ik.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      user: "tefhyjada3udkyei",
      password: "ijbkju9aif2cco4r",
      database: "bke2wjsefw9mwsd8",
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
