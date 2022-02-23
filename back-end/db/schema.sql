DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

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
