const knexConfig = require("../../../knexfile");
import knex from "knex";

const db = knex(
  knexConfig[process.env.NODE_ENV] || process.env.NODE_ENV.development
);

export default db;
