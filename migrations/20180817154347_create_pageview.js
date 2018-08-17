const TABLE_NAME = "pageview";
const knex = require("knex");
const table = table => {
  table.increments().primary();
  table.timestamp("created_at");
};

exports.up = function(knex, Promise) {
  return knex.schema
    .createTable(TABLE_NAME, table)
    .then(function() {
      console.log("Table created ", TABLE_NAME);
    })
    .catch(function(err) {
      console.log("Error with table ", TABLE_NAME, err);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable(TABLE_NAME, table)
    .then(() => {
      console.log("Table deleted ", TABLE_NAME);
    })
    .catch(err => {
      console.log("Error deleting table ", TABLE_NAME, err);
    });
};

exports.config = { transaction: false };
