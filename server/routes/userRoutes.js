const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/register", userController.register);
router.post("/room_data", userController.enterRoom);
router.get("/users", userController.getAllUsers);

module.exports = router;
