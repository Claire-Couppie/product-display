CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS products (
    id uuid DEFAULT uuid_generate_v4 (),
    title VARCHAR,
    description VARCHAR,
    price decimal
);

INSERT INTO products (title, description, price)
 VALUES
 ('Croissants', 'Viennoiserie', 1.20),
 ('Tarte aux pommes', 'Pour 10 personnes', 39.90);