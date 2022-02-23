const validateProductImage = (product) => {
    if(!product.image){
        product.image = "https://fwtx.com/downloads/22719/download/coming-soon.png?cb=ef8dbfa3204e40cc01f6514a1781bb25&w=1024&h="
    }
}

module.exports = validateProductImage;