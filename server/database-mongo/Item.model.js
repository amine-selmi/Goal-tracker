const mongoose = require("mongoose");
const db = require("./index.js");

const dailyGoalSchema = new mongoose.Schema({
  title:{type:String,required:true},
  description: String,
  tasks:[{type:Array , default:[]}],
  progress: {type:Number,default:0},
});

const dailyGoal = mongoose.model("dailyGoal", dailyGoalSchema);

module.exports = dailyGoal;