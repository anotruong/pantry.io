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

  async addCombo(...idx) {
    //assign the multiple arguments with destructuring method
    let [firstArg, optionalArg, mainId, ratio, note] = idx;
    console.log(firstArg, optionalArg, mainId, ratio, note);
    // return firstArg, optionalArg, mainId, ratio, note;

    // let query_text = ""
    // if (optionalArg !== '') {
    //   query_text = "INSERT INTO replacement_list (first_item, second_item, ingredient_id, ratio, notes)" 
    //                + "VALUES ($1, $2, $3, $4, $5)";
    //   await dbQuery(query_text, firstArg, optionalArg, mainId, ratio, note);
    
    // } else {
    //   query_text = "INSERT INTO replacement_list (first_item, ingredient_id, ratio, notes)"
    //                + "VALUES ($1, $2, $3, $4, $5)";
    //   await dbQuery(query_text, firstArg, mainId, ratio, note);
    // }
    
    //no return value yet.
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

  async deleteItem(id) {
    const QUERY_TEXT = "DELETE FROM ingredients_list WHERE id = $1";

    await dbQuery(QUERY_TEXT, id);

    return true;
  }

  async findItemByName(item) {
    const QUERY_TEXT = "SELECT * FROM ingredients_list WHERE name = $1";
    let result = await dbQuery(QUERY_TEXT, item);

    if (result.rowCount > 0) {
      return result.rows[0].name
    } else {
      return false;
    };
  }

  async findItemById(id) {
    const QUERY_TEXT = "SELECT name FROM ingredients_list WHERE id = $1";
    let result = await dbQuery(QUERY_TEXT, id);

    return result.rows[0].name;
  }

  async doesIdExist(...num) { 
    const QUERY_TEXT = "SELECT * FROM ingredients_list WHERE id = $1";
    let arr = [];
    for (let idx = 0; idx < num.length; idx++) {
      if (num[idx] !== '') {
        let findId = await dbQuery(QUERY_TEXT, num[idx]);
        let answer = findId.rowCount > 0 ? true : false;
        arr.push(answer);
      } else {
        arr.push(true);
      }
    }
    
    if (!arr.every(this.isTrue)) {
      let idx = arr.indexOf(false);
      return num[idx];
    }

    return true;
  }

  async displayAll() {
    const QUERY_TEXT = "SELECT * FROM ingredients_list";
    let result = await dbQuery(QUERY_TEXT);

    return this.valuesOf(result.rows);
  }

  async displayItem() {

  }

  findItem() {
    //find an existing ingredient by name. If it does not exist, return false;
  }

  sortList() {
    //sort list on dislayAll
  }

  isTrue(ele) {
    return ele === true;
  }

  valuesOf(obj) {
    let result = obj.map(sub => Object.values(sub).join('. '));
    return result;
  }
}
