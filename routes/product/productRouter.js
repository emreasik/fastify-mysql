const product = require("./product");

async function routes(fastify) {
    fastify.get("/api/v1/products", product.getAllProducts);
    fastify.get("/api/v1/product/:id", product.getProductById);
    fastify.post("/api/v1/addProduct", product.addProduct);
    fastify.delete("/api/v1/deleteProduct/:id", product.deleteProductById);
}

module.exports = routes;


// fastify.get("/api/v1/products", async (request, reply) => {
//     try {
//         let productData = await executeQuery("SELECT * FROM Product", []);
//         reply.code(200).send(productData);
//     } catch (error) {
//         reply.status(500).send(error);
//     }
// });