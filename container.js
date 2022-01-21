const express = require("express");
const { createContainer, InjectionMode, asValue } = require("awilix");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json({ limit: "10mb", extended: true }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
const createError = require("http-errors");
const axios = require("axios");
const db = require("./src/infrastructure/database/models");
const jwt = require("jsonwebtoken");
const config = "security-auth";
const bcrypt = require("bcrypt");
const Joi = require("joi");
const container = createContainer();

container
    .register({
        createError: asValue(createError),
        db: asValue(db),
        axios: asValue(axios),
        jwt: asValue(jwt),
        config: asValue(config),
        bcrypt: asValue(bcrypt),
        app: asValue(app),
        express: asValue(express),
        joi: asValue(Joi),
    })
    .loadModules(
        [
            "src/app/operations/**/*.js",
            "src/app/services/**/*.js",
            "src/infrastructure/database/repository/**/*.js",
            "src/infrastructure/integration/rest/**/*.js",
            "src/interfaces/http/schemas/**/*.js",
        ],
        {
            formatName: "camelCase",
            resolverOptions: {
                injectionMode: InjectionMode.PROXY,
            },
        }
    );
module.exports = container;
