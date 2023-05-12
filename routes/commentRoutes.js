const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const { ensureAutentication } = require("../middlewares/middleweres");

router.post("/:id", ensureAutentication, commentController.store);
router.get("/", ensureAutentication, commentController.index);
router.get("/editar/:id", ensureAutentication, commentController.edit);
router.post("/editar/:id", ensureAutentication, commentController.update);
router.delete("/:id", ensureAutentication, commentController.destroy);
module.exports = router;
