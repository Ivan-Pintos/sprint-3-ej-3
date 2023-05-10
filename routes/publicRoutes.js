const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
const articleController = require("../controllers/articleController");

router.get("/", pagesController.showHome);
router.get("/admin", articleController.showAdmin);
router.get("/login", pagesController.showLogin);
router.get("/register", pagesController.showRegister);
router.post("/register", pagesController.register);
module.exports = router;
