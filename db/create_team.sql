INSERT INTO team
  (pokemon_id)
  VALUES
  ($1)
returning *;
