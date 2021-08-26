// middelware
const express = require("express");
const studentsData = require("../model/studentsModel");

const studentInfo = async (req,res,next)=>{
    let stuednt;
try {
    stuednt = await studentsData.find();
    res.status(200).json(stuednt.map((onestudent)=>{
        return{
            studentId: onestudent._Id,
            studentPassword: onestudent.studentPassword,
            studentAge: onestudent.studentAge,
            toolStack: onestudent.toolStack,
          email: onestudent.email,
          fbw: onestudent.fbw,

        };
    })
  );
}

  catch (err) {
    res.status(500).json({ message: err.message });
  }
};