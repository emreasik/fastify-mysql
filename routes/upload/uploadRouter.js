const { uploadFile, fieldsUpload, Multer } = require("./upload");
async function routes(fastify) {
    fastify.post("/api/v1/upload", { preHandler: fieldsUpload }, uploadFile);
}
module.exports = {
    routes,
    Multer,
};