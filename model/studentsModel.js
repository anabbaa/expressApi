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
    type: Number,
  },
  toolStack:{
    type: Array,
  },
  email: String,

  age:{
type: Number,
required: [true, "please write your age"],
  },
  add:String

});

module.exports = mongoose.model("StudentsData", studentsDataSchema);