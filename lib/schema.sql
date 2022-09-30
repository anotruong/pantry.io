CREATE TABLE ingredients_list (
  id SERIAL NOT NULL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE replacement_list(
  id SERIAL NOT NULL PRIMARY KEY,
  first_item INT NOT NULL,
  second_item INT,
  ratio TEXT NOT NULL,
  notes varchar(100),
  ingredient_id INT NOT NULL REFERENCES ingredients_list(id) ON DELETE CASCADE
);