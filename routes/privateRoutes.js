const express = require("express");
const articleController = require("../controllers/articleController");
const authController = require("../controllers/authControllers");
const { ensureAutentication } = require("../middlewares/ensureAutentication");
const { hasPermissionCreateArticle } = require("../middlewares/permissions");
const router = express.Router();

router.get("/admin", ensureAutentication, hasPermissionCreateArticle, articleController.showAdmin);
router.post("/login", authController.login);
module.exports = router;
