// middelware
const express = require("express");
const { toolStackSort } = require("../middelware/studentMiddelware");
const StudentsData = require("../model/studentsModel");

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
    res.status(200).json(student);
    }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//add one

const displayUponName = async (req, res) => {
  res.status(200).json(res.student);
};


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
    add: req.body.add,

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
  

    const {name, age, email, add , fdw, pass, toolStack} = req.body;
    if(name) {
      res.student.name = name;
    }if(age) {
      res.student.name = age;
    }
    if(add) {
      res.student.name = add;
    }
    if(email) {
      res.student.name = email;
    }
    if(toolStack) {
      res.student.name = toolStack;
    }
    if(pass) {
      res.student.name = pass;
    }
    if(fdw) {
      res.student.name = fdw;
    }
    try{
    await res.student.save();
    res.status(200).json({ message: "student has been updated" , data: res.student});

  }catch(err){
    res.status(500).json({ message: err.message }); 

  }
};

// update document

const updateAll = async (req, res)=>{
  try{
await StudentsData.updateOne({
name: req.params.name,
add: req.params.add,
pass: req.params.pass,
email: req.params.email,
fdw: req.params.fdw,
age: req.params.age,
toolStack: req.params.toolStack
},
{
  $set:{
  name: req.body.name,
  add: req.body.add,
  age: req.body.age,
  email: req.body.email,
  fdw: req.body.fdw,
  pass: req.body.pass,
  toolStack: req.body.toolStack,
},
}
);
res.status(200).json({ message: "many have updated" , data: res.student});

  }
  catch (err){
    res.status(400).json({ message: err.message });

  }
};

module.exports = {
  studentInfo,
  displayUponName,
  addStudent,
  updateName,
  updateAll,
};