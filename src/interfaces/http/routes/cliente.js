const { createController } = require("awilix-express"); // or `awilix-router-core`
const ClienteController = require("../controllers/ClienteController");

module.exports = createController(ClienteController)
    .prefix("/cliente")
    .post("/valida-contato", "validaNoventena");
