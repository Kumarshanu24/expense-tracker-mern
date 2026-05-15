const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/userController");

const { body } = require("express-validator");

router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("password").isLength({ min: 6 }).withMessage("Password min 6 char")
  ],
  registerUser
);

router.post("/login", loginUser);

module.exports = router;
