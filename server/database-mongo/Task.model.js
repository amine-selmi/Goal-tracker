const mongoose = require("mongoose");
const db = require("./index.js");

const taskSchema = new mongoose.Schema({
    description:{type:String,required:true},
    idGoal:{type:String,required:true},
    status: {type:Boolean, default:false},
  });
  
  const task = mongoose.model("task", taskSchema);
  
  module.exports = task;