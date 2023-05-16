const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const { ensureAutentication } = require("../middlewares/ensureAutentication");
const {
  hasPermissionCreateArticle,
  hasPermissionDeleteArticle,
  hasPermissionUpdateArticle,
} = require("../middlewares/permissions");

router.get("/crear", ensureAutentication, hasPermissionCreateArticle, articleController.create);
router.post("/", ensureAutentication, hasPermissionCreateArticle, articleController.store);
router.get("/:id", articleController.show);
router.get("/editar/:id", ensureAutentication, hasPermissionUpdateArticle, articleController.edit);
router.patch(
  "/editar/:id",
  ensureAutentication,
  hasPermissionUpdateArticle,
  articleController.update,
);

router.delete("/:id", ensureAutentication, hasPermissionDeleteArticle, articleController.destroy);

module.exports = router;
