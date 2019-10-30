const Pool = require("pg").Pool;

const client = new Pool({
  user: "mengting",
  password: "development",
  host: "localhost",
  port: 5432,
  database: "final"
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
