

const express = require("express");
const router = express.Router();
const userController = require("../controllers/studentsController");
const userMdd = require("../middelware/");

// GET one user
// URL  http://localhost:5000/display/:name

router
  .route("/:name")
  .get(
    userMdd.getUser,
    userMdd.userNameCapitalized,
    userMdd.toolStackArrSort,
    userMdd.checkAge,
    userMdd.checkFbW,
    userMdd.strToNum,
    userController.displayUser
  );

module.exports = router;