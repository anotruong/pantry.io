const { dbQuery } = require("./dbQuery");
// const { Client } = require("pg");
// const { query } = require("express");

module.exports = class PgPersistence {
  constructor() {}

  async addItem(name) {
    // check if input is unique.
    const QUERY_TEXT = "INSERT INTO ingredients_list (name) VALUES ($1)";
    let result = await dbQuery(QUERY_TEXT, name);

    return true;
  }

  alterNote(str) {
    //add or change note about this item
  }

  async isUnique(str) {
    // checks if the ingredient name exists already
    //find a ingredient that shares the same name.
    //search through database.
    const QUERY_TEXT = "SELECT * FROM ingredients_list WHERE name = $1";
    const QUERY_COND = str;

    let result = await dbQuery(QUERY_TEXT, QUERY_COND);
    // if (result. === undefined) return true;
    // console.log(result.rows)
    // return result;
    // return false;
    if (result.rows.length > 0) return false;

    return true;
  }

  deleteItem() {
    //remove item from display
  }

  find_itemId() {
    // search for item's Id
  }

  async displayAll() {
    //refactored

    const QUERY_TEXT = "SELECT * FROM ingredients_list";
    let result = await dbQuery(QUERY_TEXT);

    return result.rows;
  }

  findItem() {
    //find an existing ingredient by name. If it does not exist, return false;
  }

  sortList() {
    //sort list on dislayAll
  }

  valuesOf(obj) {
    return obj.map(sub => Object.values(sub));
  }
}
