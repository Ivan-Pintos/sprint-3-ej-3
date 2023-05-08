const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
const articleController = require("../controllers/articleController");
// Rutas relacionadas a la parte pública del sitio web:
// ...
router.get("/", pagesController.showHome);
router.get("/articulos/:id", articleController.show);
module.exports = router;
