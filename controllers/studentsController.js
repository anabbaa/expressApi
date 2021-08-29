// middelware
const express = require("express");
const StudentsData = require("../model/studentsModel");

//display one 
const displayStudent = async (req,res, next)=>{
let student;
  try{
 student = await StudentsData.findOne({ name: req.params.name});
 console.log(student);

if (student == null)
return res.status(404).json({ message: "student NOT FOUND." });

  }
  catch(err){
    res.status(500).json({ message: err.message });
  }
  res.student = student;
  next();
};
//display all
const studentInfo = async (req,res)=>{

try {
    const students = await StudentsData.find();
    console.log(students);

    res.status(200).json(students.map((student)=>{
      const {_id, name, pass, fdw, toolStack, email, age} = student;
      return{
        id: _id,
        name: name,
        pass: pass,
        fdw: fdw,
        toolStack: toolStack,
        email: email,
        age: age,
        request:{
          type: "GET",
            url: `http://localhost:5000/students/${student.name}`,
        },


      };
    }));

    }
    
  



  catch (err) {
    res.status(500).json({ message: err.message });
  }
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
// {
//   name: "Ahmed",
//   pass: "1233",
//   fdw: "44",
//   "toolstack": ["html", "css", "react" ],
//   "age": "33",
      // "email": "hgfddddd@gmail.com",
//   "add": "hamburg",
// }

const addStudent = async (req, res)=>{
  const student = new studentsData({
    name: req.body.name,
    pass: req.body.pass,
    fdw:  req.body.fdw,
    toolStack: req.body.toolStack,
    age: req.body.age,
    email: req.body.email,
    add: req.body.name,

  });
  try{
const newstudent = await student.save();
console.log(newstudent);
res.status(200).json(newstudent);

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
await StudentsData.updateOne({
name: req.params.name},
{
  $set:{
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

// update all

const updateAll = async (req, res)=>{
  try{
await StudentsData.updateMany({
name: req.params.name},
{
  $set:{
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


const displayUponName = async (req, res) => {
  res.status(200).json(res.student);
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
  displayStudent,

};