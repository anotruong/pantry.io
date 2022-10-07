const { Client } = require("pg");

module.exports = {
  async dbQuery(statement, ...parameters) {
    let client = new Client({database: "ingredients-project"});

    await client.connect();
    let result = await client.query(statement, parameters);

    await client.end();

    return result;
  }
}