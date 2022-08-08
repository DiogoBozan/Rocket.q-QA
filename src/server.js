// SERVER.JS INICIA NOSSO SERVIDOR
const express = require("express");
const route = require("./route");
const path = require("path");

const server = express();

server.set("view engine", "ejs");

server.use(express.static("public"));

// __DIRNAME AJUDA A ENCONTRAR A PASTA ATUAL QUE ESTOU. EX: SERVER.JS
server.set("views", path.join(__dirname, "views"));

server.use(express.urlencoded({ extended: true }));

server.use(route);

server.listen(3000, () => console.log("SERVER IT'S ON!!!"));
