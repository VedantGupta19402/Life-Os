const express = require("express");

const entryController = require("../controllers/entrycontroller");

const authMiddleware = require("../middleware/authmiddileware");

const router = express.Router();

router.post("/create", authMiddleware, entryController.createEntry);

router.get("/all", authMiddleware, entryController.getEntries);

router.get("/today", authMiddleware, entryController.getTodayEntry);

router.delete("/:id", authMiddleware, entryController.deleteEntry);

module.exports = router;