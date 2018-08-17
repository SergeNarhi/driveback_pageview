import db from "../datasource";

function makeCreate(table) {
  return function create(user) {
    return db
      .table(table)
      .insert(user)
      .returning("id");
  };
}

function makeFindById(table) {
  return function findById(id, fields) {
    return db
      .table(table)
      .select(fields || "*")
      .where({ id: id });
  };
}

function makeFind(table) {
  return function find(where, fields) {
    return db
      .table(table)
      .select(fields || "*")
      .where(where);
  };
}

function makeCount(table) {
  return function find(where, fields) {
    return db
      .table(table)
      .select(fields || "*")
      .where(where)
      .count("id");
  };
}

function crudFactory(table) {
  return {
    create: makeCreate(table),
    findById: makeFindById(table),
    find: makeFind(table),
    count: makeCount(table)
  };
}

export default crudFactory;
