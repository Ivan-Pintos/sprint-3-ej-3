const express = require("express");
const articleController = require("../controllers/articleController");
const authController = require("../controllers/authControllers");
const ensureAutentication = require("../middlewares/ensureAuthenticated");
const router = express.Router();

router.get("/admin", ensureAutentication, articleController.showAdmin);
router.post("/login", authController.login);
module.exports = router;
