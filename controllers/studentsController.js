// middelware
const express = require("express");
const studentsData = require("../model/studentsModel");
//display
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
//age
const studentAge = async (req, res)=>{
    if (stuednt > 18)
    res.student = student;
    student.parseInt();
    try {
        await res.student.save();
        res.status(200).json({ message: "ok you are above 18", data: res.student });

    }
    catch  (err) {
            res.status(400).json({ message: err.message });
          }
    };
    //fdw
    const studentBelong = async (req, res)=>{
        const {fdw} = req.body;
        if(stuednt == fdw)
        res.student = stuednt;
        student.parseInt();
        try{
await res.student.save();
res.status(200).json({ message: "yes your are with us", data: res.student });

        }
        catch{
            res.status(400).json({ message: err.message });

        }

    };
    //first letter
    const firstLetter = async (req, res)=>{
student.map((onestudent)=>{
 return   onestudent[0].toUpperCase + onestudent(1);
});
res.status(200).json({ message: "your name looks pretty", data: res.student });

    }
const stacktools = async (req, res)=>{
  const {toolStack} = req.body;
  student = await studentsData.find().sort({toolStack: 1});
  res.status(200).json({message: "fine good order", data:res.student});
};

//functions
//add new student

const addStudent = async (req, res)=>{
  const student = new studentsData({
    name: req.body.name,
    pass: req.body.pass,
    fdw:  req.body.fdw,
    toolStack: req.body.toolStack,
    age: req.body.age,
    add: req.body.name,

  });
  try{
const newstudent = await student.save();
res.status(201).json(newEmployee);

  }
  catch(err){
    res.status(400).json({
      message: err.message,
    });
  }
};

//update upon name
const updateName = async (req, res)=>{
  try{
await studentsData.updateOne({
  name: req.body,name,
},
{set:{
  name: req.body.name,
},

}
);
res.status(200).json({ message: "a student has updated" });

 }
  catch(err){
    res.status(400).json({ message: err.message });

  }
};

// update all

const updateAll = async (req, res)=>{
  try{
await studentsData.updateMany({
name: req.body.name},
{set:{
  name: req.body.name,
},

}
);
res.status(200).json({ message: "many have updated" });

  }
  catch (err){
    res.status(400).json({ message: err.message });

  }
};

// show  on upon nasme
const displayUponName = async (req, res)=>{
  try {
const student = new studentsData.find({
  name: req.parmas.name
});
res.status(200).json({ message: "coll you find me" });


  }
  catch(err){
    res.status(400).json({ message: err.message });

  }
};

module.exports = {
  studentInfo,
  studentAge,
  studentBelong,
  firstLetter,
  addStudent,
  updateName,
  updateAll,
  displayUponName,

};