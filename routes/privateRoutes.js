const express = require("express");
const { Article } = require("../models");
const router = express.Router();
const articleController = require("../controllers/articleController");

// Rutas relacionadas al panel de control (Admin):
// ...
router.get("/admin", articleController.showAdmin);

module.exports = router;
