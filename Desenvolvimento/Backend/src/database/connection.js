const knex = require("knex");
const configuration = require("../knexfile");

const connection = knex(configuration.developmentFront);

module.exports = connection;
