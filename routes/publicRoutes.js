const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
const articleController = require("../controllers/articleController");

const { Article } = require("../models");
// Rutas relacionadas a la parte pública del sitio web:
// ...
router.get("/", pagesController.showHome);
router.get("/admin", articleController.showAdmin);
router.get("/login", pagesController.showLogin);
router.get("/register", pagesController.showRegister);
module.exports = router;
