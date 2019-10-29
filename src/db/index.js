const pg = require("pg");

const client = new pg.Client({
  port: 5432,
  user: "development",
  password: "development",
  database: "final"
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
