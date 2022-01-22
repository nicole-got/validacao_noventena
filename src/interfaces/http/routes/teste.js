const { createController } = require("awilix-express"); // or `awilix-router-core`
const TesteController = require("../controllers/TesteController");

module.exports = createController(TesteController)
    .prefix("/teste")
    .get("/all", "all")
    .post("/get", "get")
    .post("/save", "save");
