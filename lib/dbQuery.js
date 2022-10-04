const { Client } = require("pg");

module.exports = {
  async dbQuery(statement) {
    let client = new Client({database: "ingredients-project"});

    await client.connect();
    let result = await client.query(statement);

    await client.end();

    return result;
  }
}