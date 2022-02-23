DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    image TEXT,
    description TEXT,
    price INTEGER DEFAULT 0,
    rating INTEGER DEFAULT 0,
    featured BOOLEAN
);
