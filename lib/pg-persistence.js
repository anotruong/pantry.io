const { dbQuery } = require("./dbQuery");
const { Client } = require("pg")

module.exports = class PgPersistence {
  constructor() {}

  addItem(name, ratio, note) {
    // add new ingredient to ingredients_table
    //error if ingredient is not unique
  }

  alterNote(str) {
    //add or change note about this item
  }

  isUnique() {
    // checks if the ingredient name exists already
  }

  deleteItem() {
    //remove item from display
  }

  find_itemId() {
    // search for item's Id
  }

  async displayAll() {
    const QUERY_TEXT = "SELECT * FROM ingredients_list";

    // let client = new Client({database: "ingredients-project"});
    // await client.connect();
    // let result = await client.query(QUERY_TEXT);
    // result.rows.forEach(subArr => {
    //   console.log(subArr)
    // })

    // await client.end();
    let result = await dbQuery(QUERY_TEXT);
    console.log(result.rows)
    return result.rows;
  }

  findItem() {
    //find an existing ingredient by name. If it does not exist, return false;
  }

  sortList() {
    //sort list on dislayAll
  }
}
