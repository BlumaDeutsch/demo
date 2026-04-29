const knex = require('knex');
const knexConfig = require('./knexfile');

const knex = knex(knexConfig.development);

module.exports = knex;