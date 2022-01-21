const { createController } = require("awilix-express"); // or `awilix-router-core`
const AuthController = require("../controllers/AuthController");

module.exports = createController(AuthController)
    .prefix("/authenticate")
    .post("/", "login");
