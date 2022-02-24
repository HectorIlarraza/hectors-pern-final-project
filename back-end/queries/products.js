const db = require("../db/dbConfig.js");

const getAllProducts = async () => {
    try{
        const allProducts = await db.any("SELECT * FROM products;");
        return allProducts;
    }catch(err){
        return err;
    }
};

const getProduct = async (id) => {
    try{
        const oneProduct = await db.one(
            "SELECT * FROM products WHERE id=$1",
            id
        )
        return oneProduct;
    }catch(err){
        return err;
    }
};

const createProduct = async (product) => {
    try{
        const newProduct = await db.one(
            "INSERT INTO Products (name, image, description, price, rating, featured) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            [product.name, product.image, product.description, Number(product.price), Number(product.rating), product.featured]
        )
        return newProduct;
    }catch(err){
        return err;
    }
};

const deleteProduct = async (id) => {
    try{
        const deletedProduct = await db.one(
            "DELETE FROM products WHERE id = $1 RETURNING *",
            id
        )
        return deletedProduct
    }catch(err){
        return err;
    }
};

const updateProduct = async (id, product) => {
    try{
        const updatedProduct = await db.one(
            "UPDATE products SET name=$1, image=$2, description=$3, price=$4, rating=$5, featured=$6 WHERE id=$7 RETURNING *",
            [product.name, product.image, product.description, product.price, product.rating, product.featured, id]
        )
        return updatedProduct
    }catch(err){
        return err;
    }
};


module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
};