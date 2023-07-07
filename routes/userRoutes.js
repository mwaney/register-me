const express = require("express");
const {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../userController/userController");
const router = express.Router();

router.get("/", getUsers).post("/", addUser);
router.get("/:id", getUser).put("/:id", updateUser).delete("/:id", deleteUser);

module.exports = router;
