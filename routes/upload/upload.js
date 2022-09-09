const Multer = require("fastify-multer");
const { executeQuery } = require("../../config/db");

process.env.ROOT_PATH = __dirname;
const ROOT_PATH = process.env.ROOT_PATH;
var storage = Multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, ROOT_PATH);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

var upload = Multer({
    storage: storage,
});

let fieldsUpload = upload.single("file");
//let fieldsUpload = upload.array("file");

const uploadFile = async (req, res) => {
    // console.log(req.file);
    let filename = req.file.filename;
    //console.log(filename);

    let file = await executeQuery(
        "insert into ProductImages(Image)values(?)",
        filename
    );

    res.status(200).send(file);
};

module.exports = {
    uploadFile,
    fieldsUpload,
    Multer,
};