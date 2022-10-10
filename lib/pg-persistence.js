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
  
  // isUndefined(value) {
  //   return value !== '' ? value : 'undefine';
  // }

  async deleteItem(id) {
    const QUERY_TEXT = "DELETE FROM ingredients_list WHERE id = $1";

    await dbQuery(QUERY_TEXT, id);

    return true;
  }

  async find_itemId(...num) { 
    const QUERY_TEXT = "SELECT * FROM ingredients_list WHERE id = $1";
    let arr = [];
    for (let idx = 0; idx < num.length; idx++) {
      if (num[idx] !== '') {
        let findId = await dbQuery(QUERY_TEXT, num[idx]);
        let answer = findId.rowCount > 0 ? true : false;
        arr.push(answer);
      } else {
        arr.push(false);
      }
    }
    
    if (!Array.every(arr)) {
      //find the index of the 'false' element and use that to return the element in 'num'
      //the index.js will issue an error flash.
    }
    //iterate through num and check if the elements if they are true?
    //push response to empty array
    //skip over element if it's undefined.
    //check if the array is true or false (all true or all false)
    // if true return true
    //if false, return the element that returns false.
    // let result = await dbQuery(QUERY_TEXT, num);

    // if (!result.rowCount > 0) {
    //   return false;
    // } else {
    //   return true;
    // }
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
