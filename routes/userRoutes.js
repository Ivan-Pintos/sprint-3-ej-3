const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { hasPermissionDeleteUser } = require("../middlewares/permissions");
const { ensureAutentication } = require("../middlewares/ensureAutentication");

//Cambiar permiso por list users
router.get("/", ensureAutentication, hasPermissionDeleteUser, userController.index);
router.get("/crear", ensureAutentication, userController.create);
router.post("/", ensureAutentication, userController.store);
router.get("/:id", ensureAutentication, userController.show);
router.get("/:id/editar", ensureAutentication, userController.edit);
router.patch("/:id", ensureAutentication, userController.update);
router.delete("/:id", ensureAutentication, userController.destroy);

module.exports = router;
