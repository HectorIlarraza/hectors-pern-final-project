const express = require("express");
const products = express.Router();
const { getAllProducts, getProduct, createProduct, deleteProduct, updateProduct } = require("../queries/products.js");
const validateProductImage = require("../validations/validateProductImage.js");

// MIDDLEWARE Routes

// INDEX
products.get("/", async (req,res)=>{
    try{
        const allProducts = await getAllProducts();
        if(allProducts[0]){
            res.status(200).json({success: true, payload: allProducts})
        }else{
            res.status(404).json({success: false, payload: "Not Found"})
        }
    }catch(err){
        console.log(err)
    }
});

// SHOW
products.get("/:id", async (req,res)=>{
    const { id } = req.params
    try{
        const product = await getProduct(id);
        if(product.id){
            res.status(200).json({success: true, payload: product})
        }else{
            res.status(404).json({success: false, payload: "not found"})
        }
    }catch(err){
        console.log(err)
    }
});

// CREATE
products.post("/", async (req,res)=>{
    const { body } = req;
    body.image = validateProductImage(body);
    try{
        const createdProduct = await createProduct(body)
        if(createdProduct.id){
            res.status(200).json({success: true, payload: createdProduct})
        }else{
            res.status(422).json({success: false, payload: "Not created"})
        }
    }catch(err){
        console.log(err)
    }
});

// DELETE
products.delete("/:id", async (req,res)=>{
    const { id } = req.params
    try{
        const deletedProduct = await deleteProduct(id);
        if(deletedProduct.id){
            res.status(200).json({success:true, payload: deletedProduct})
        }else{
            res.status(422).json({success:false, payload:"Could not Delete/Does not Exist"})
        }
    }catch(err){
        console.log(err)
    }
});

// UPDATE
products.put("/:id", async (req,res)=>{
    const { id } = req.params;
    const { body } = req;
    try{
        const updatedProduct = await updateProduct(id, body);
        if(updatedProduct.id){
            res.status(200).json({success:true, payload: updatedProduct})
        }else{
            res.status(422).json({success:false, payload:"Not Found/Unable to Update"})
        }
    }catch(err){
        console.log(err)
    }
})



module.exports = products;