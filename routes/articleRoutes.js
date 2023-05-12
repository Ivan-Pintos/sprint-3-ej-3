const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const { ensureAutentication } = require("../middlewares/middleweres");
// Rutas relacionadas a los artículos:
// ...

router.get("/", articleController.index);
router.get("/crear", ensureAutentication, articleController.create);
router.post("/crear", articleController.store);
router.post("/", articleController.store);
router.get("/:id", articleController.show);
router.get("/editar/:id", ensureAutentication, articleController.edit);
router.post("/editar/:id", articleController.update);
//router.patch("/:id", articleController.update);
router.delete("/admin/:id", ensureAutentication, articleController.destroy);
router.get("/articulos", articleController.show);

module.exports = router;
