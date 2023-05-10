const express = require("express");
const articleController = require("../controllers/articleController");
const authController = require("../controllers/authControllers");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const router = express.Router();

router.get("/admin", articleController.showAdmin);
router.post("/login", authController.login);
module.exports = router;
