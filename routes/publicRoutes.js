const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
const articleController = require("../controllers/articleController");

const { Article } = require("../models");
// Rutas relacionadas a la parte pública del sitio web:
// ...
router.get("/", pagesController.showHome);
router.get("/admin", (req, res) => {
  const isAdmin = req.user && req.user.isAdmin;
  articleController.showAdmin(req, res, isAdmin);
});
router.get("/login", (req, res) => {
  res.render("login", { message: req.flash("error") });
});
router.post("/login", pagesController.showLogin);
router.get("/register", pagesController.showRegister);
module.exports = router;
