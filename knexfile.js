const knexConfig = {
  development: {
    client: "pg",
    version: "10.4",
    connection: {
      host: "db",
      user: "driveback",
      password: "driveback",
      database: "driveback"
    }
  },

  production: {
    client: "pg",
    version: "10.4",
    connection: {
      host: "db",
      user: "driveback",
      password: "driveback",
      database: "driveback"
    }
  }
};

module.exports = knexConfig;
