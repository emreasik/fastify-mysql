const { executeQuery } = require("../../config/db");

const getAllProducts = async (req, reply) => {
    try {
        console.log(req.params);
        let productData = await executeQuery("SELECT * FROM Product", []);
        reply.code(200).send(productData);
    } catch (error) {
        reply.status(500).send(error);
    }
};

const getProductById = async (req, reply) => {
    let productId = req.params.id;
    try {
        let productData = await executeQuery("SELECT * FROM Product WHERE ProductId=?", [productId]);
        reply.code(200).send(productData);
    } catch (error) {
        reply.status(500).send(error);
    }
};

const deleteProductById = async (req, reply) => {
    let productId = req.params.id;
    try {
        let productData = await executeQuery("DELETE FROM Product WHERE ProductId=?", [productId]);
        reply.code(200).send(productData);
    } catch (error) {
        reply.code(400).send(productData);
    }
};

const addProduct = async (req, reply) => {
    try {
        const { ProductName, Barcode, Price } = req.body;
        let productData = await executeQuery("INSERT INTO Product (ProductName, Barcode, Price) VALUES (?,?,?)",
            [
                ProductName,
                Barcode,
                Price
            ]);
        reply.code(201).send(productData);
    } catch (error) {
        reply.status(400).send(error);
    }
};

module.exports = {
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    addProduct: addProduct,
    deleteProductById: deleteProductById,
}