INSERT INTO ingredients_list (name)
VALUES ('milk'),
       ('half and half'),
       ('baking powder'), 
       ('baking soda'),
       ('corn starch'),
       ('heavy whipping cream'),
       ('cream of tartar'),
       ('grandulated sugar'),
       ('powdered sugar');

INSERT INTO replacement_list (first_item, second_item, ratio, ingredient_id)
VALUES (1, 6, '1:1', 2), (4, 7, '1:2', 3);

INSERT INTO replacement_list (first_item, second_item, ratio, notes, ingredient_id)
VALUES (5, 8, '1:16', 'blender required', 9);