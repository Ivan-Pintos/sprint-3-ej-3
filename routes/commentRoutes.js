const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const { ensureAutentication } = require("../middlewares/ensureAutentication");
const {
  hasPermissionUpdateComment,
  hasPermissionDeleteComment,
} = require("../middlewares/permissions");

router.get("/", ensureAutentication, hasPermissionUpdateComment, commentController.index);
router.post("/:id", ensureAutentication, commentController.store);
router.get("/editar/:id", ensureAutentication, hasPermissionUpdateComment, commentController.edit);
router.post(
  "/editar/:id",
  ensureAutentication,
  hasPermissionUpdateComment,
  commentController.update,
);
router.delete("/:id", ensureAutentication, hasPermissionDeleteComment, commentController.destroy);
module.exports = router;
