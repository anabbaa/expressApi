const express = require("express");
const router = express.Router();

 const StudentsData = require("../model/studentsModel");
 const {
    studentInfo,
    studentAge,
    studentBelong,
    firstLetter,
    addStudent,
    updateName,
    updateAll,
    displayUponName,
    displayStudent,
 } = require("../controllers/studentsController");

 router.route("/").get(studentInfo).post(addStudent);

 router.route("/:name").get(displayStudent,displayUponName)
  .patch(displayStudent,updateName);

  router.route("/update/:name").put(displayStudent, updateAll);
  
  















module.exports = router;
