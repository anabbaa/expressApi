const express = require("express");
const StudentsData = require("../model/studentsModel");

//middelware 
const displayStudent = async (req,res, next)=>{
    let student;
      try{
     student = await StudentsData.findOne({ name: req.params.name});
    //  console.log(student);
    
    if (student == null)
    return res.status(404).json({ message: "student NOT FOUND." });
    
      }
      catch(err){
        res.status(500).json({ message: err.message });
      }
      res.student = student;
      next();
    };
//age
    const studentAge = async (req,res,next)=>{
        let student;
        res.student = student;
        try{
            if (student > 18){
     res.status(200).json({ message: "cool you are big enough" });
                    }
                    else{
     return  res.status(404).json({ message: "you are too young" });
                    }
        }
        catch(err){
            res.status(500).json({ message: err.message });
        }  
next();
    };
    //fdw
    const studentBelong = async (req, res, next)=>{
        let student;
        res.student = student;
        console.log(req.body);
try{
    const {fdw} = student;
    if (student == fdw ){
        res.status(200).json({ message: "yes your are with us" });
    }
    else{
        return   res.status(404).json({ message: "you are in another course" });
    }
}
catch(err){
    res.status(500).json({ message: err.message });
}
next();
// capital letter
    };
    const firstLetter = async (req, res, next) =>{
        try{
            let student;
        res.student = student;
        student.name = student.name[0].toUpperCase() + student.name.slice(1);
        res.status(200).json({ message: "cool name" });
        }
        catch(err){
            res.status(500).json({ message: err.message });
        }
        next();
    };
    const toolStackSort = async => {
try{
res.student.sort({toolStack: 1});
res.status(200).json({ message: "cool order" });
}
catch(err){
    res.status(500).json({ message: err.message });
}
next();
    };
//vchange numbers
const convertToNumbers = async (req, res, next)=>{
    try{
        res.student.age.parsInt();
    res.student.fdw.parsInt();
    res.status(200).json({ message: "haven been converted to numbers" });

    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
    next();
};


module.exports = {
    displayStudent,
    studentAge,
     firstLetter,
    convertToNumbers,
    studentBelong,
    toolStackSort,
  };