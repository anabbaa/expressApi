const express = require("express");
const router = express.Router();

 const StudentsData = require("../model/studentsModel");
 const {
  displayStudent,
  studentAge,
  firstLetter,
  convertToNumbers,
  studentBelong,
  toolStackSort,
 } = require("../middelware/studentMiddelware");
 const {
   studentInfo,
  displayUponName,
  addStudent,
  updateName,
  updateAll,
 } = require("../controllers/studentsController");

 router.route("/").get(studentInfo, studentBelong,
   studentAge, convertToNumbers, toolStackSort).post(addStudent);

   router.route("/display/:name").get(displayStudent,displayUponName);

 router.route("/:name").patch(displayStudent,updateName);

  router.route("/:name").put(displayStudent, updateAll);
  
  
module.exports = router;
