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
  next();
};

const studentAge = async (req, res)=>{
    if (stuednt > 18)
    res.student = student;
    try {
        await res.student.save();
        res.status(200).json({ message: "ok you are above 18", data: res.student });

    }
    catch  (err) {
            res.status(400).json({ message: err.message });
          }
    };
    const studentBelong = async (req, res)=>{
        const {fdw} = req.body;
        if(stuednt == fdw)
        res.student = stuednt;
        try{
await res.student.save();
res.status(200).json({ message: "yes your are with us", data: res.student });

        }
        catch{
            res.status(400).json({ message: err.message });

        }

    }
