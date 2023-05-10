const express = require("express");
const { Article } = require("../models");
const router = express.Router();
const articleController = require("../controllers/articleController");
const authController = require("../controllers/authControllers");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

router.get("/admin", articleController.showAdmin);

module.exports = router;
