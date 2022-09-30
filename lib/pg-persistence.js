const dbQuery = require("./dbQuery");

/*In this app, we will focus on adding and retrieving information of the database.

Words to use in main table app:
  Verbs:
    ADD ingredient
    DELETE: remove ingredient 
    FIND: search ingredient
    SHOW - display all ingredients
    ADD NOTE
    
  Nouns:
    INGREDIENT id
    USER id
    NOTE
    RATIO

  
*/

module.exports = class PgPersistence {
  constructor() {}

  addItem(name, ratio, note) {
    // add new ingredient to 
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

  displayAll() {
    //display all ingredients
    // do we include id number?
  }

  findItem() {
    //find an existing ingredient by name. If it does not exist, return false;
  }
}
