const mongoose = require("mongoose");
const studentsDataSchema = mongoose.Schema({
  name:{
    type: String,
    trim: true,
    required: [true, "please write your name"],
  },
  pass:{
    type: String,
    trim: true,
    required:[true, "please write your password"],
  },
  fdw:{
    type: String,
    required:[true, "please write your FDW course"],
    default: "48",
  },
  toolStack: Array,
  email: String,
  age:String,
  add:String,
});

module.exports = mongoose.model("StudentsData", studentsDataSchema);