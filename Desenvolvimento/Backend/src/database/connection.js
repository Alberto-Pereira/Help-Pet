const knex = require("knex");
const configuration = require("../knexfile");

const connection = knex(configuration.developmentBack);

module.exports = connection;
