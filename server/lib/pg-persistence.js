const { dbQuery } = require("./dbQuery");

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
    // console.log(firstArg, optionalArg, mainId, ratio, note);
    // return firstArg, optionalArg, mainId, ratio, note;

    let query_text = ""
    if (optionalArg !== '') {
      query_text = "INSERT INTO replacement_list (first_item, second_item, ingredient_id, ratio, notes)" 
                   + "VALUES ($1, $2, $3, $4, $5)";
      await dbQuery(query_text, firstArg, optionalArg, mainId, ratio, note);
    
    } else {
      query_text = "INSERT INTO replacement_list (first_item, ingredient_id, ratio, notes)"
                   + "VALUES ($1, $2, $3, $4)";
      await dbQuery(query_text, firstArg, mainId, ratio, note);
    }
    
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

  async findAltById(ingredient_id) {
    const QUERY_TEXT = "SELECT * FROM replacement_list WHERE ingredient_id = $1";
    let result = await dbQuery(QUERY_TEXT, ingredient_id);

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

  //need to rename
  async displayAll() {
    const QUERY_TEXT = "SELECT * FROM ingredients_list";
    let result = await dbQuery(QUERY_TEXT);
    return result.rows;

    // return this.valuesOf(result.rows);
  }

  //display comboList
  async displayAltInfo(id) {
    //pass to a separte function
    let rowObj = await this.retrieveComboInfo(id);
    let objOrStr;
    // console.log(rowObj)
    if (rowObj === undefined) {
      objOrStr = {firstAlt: 'There are no substitutes saved for this ingredient.', secondAlt: ' ', note: ' ', ratios: ' ' }
    } else {
      let firstAltName = await this.findItemById(rowObj.first_item);
      let secondAltName = await this.findItemById(rowObj.second_item);
      let notes = rowObj.notes;
      let ratio = rowObj.ratio;
      if(secondAltName !== undefined) {
        objOrStr = {firstAlt: `Ingredients: ${firstAltName}`, secondAlt: ` and ${secondAltName}`, note: `Notes: ${notes}`, ratios: `Ratio: ${ratio}`}
      } else {
        objOrStr = {firstAlt: `Ingredients: ${firstAltName}`, secondAlt: '', note: `Notes: ${notes}`, ratios: `Ratio: ${ratio}`}
        objOrStr = {firstAlt: `Ingredients: ${firstAltName}`, secondAlt: '', note: `Notes: ${notes}`, ratios: `Ratio: ${ratio}`}
      }
    }

    return objOrStr;
  }

  async displayItem() {

  }

  findItem() {
    //find an existing ingredient by name. If it does not exist, return false;
  }

  async retrieveComboInfo(idx) {
    const QUERY_TEXT = "SELECT * FROM replacement_list WHERE ingredient_id = $1";
    const ITEM_ID = idx;
    let result = await dbQuery(QUERY_TEXT, ITEM_ID);
    return result.rows[0];
  }

  sortList() {
    //sort list on dislayAll
  }

  isTrue(ele) {
    return ele === true;
  }

  toString(obj) {
    let result = obj.map(sub => Object.values(sub).join('. '));
    return result;
  }
}
