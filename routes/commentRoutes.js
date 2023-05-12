const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const { ensureAutentication } = require("../middlewares/middleweres");

router.post("/:id", ensureAutentication, commentController.store);

module.exports = router;
