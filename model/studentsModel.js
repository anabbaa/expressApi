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
  },
  toolStack:{
    type: Array,
  },
  email: String,

  age:{
type: String,
required: [true, "please write your age"],
  },
  add:String

});

module.exports = mongoose.mode("StudentsDatas", studentsDataSchema);