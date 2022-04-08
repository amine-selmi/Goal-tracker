const mongoose = require("mongoose");
const db = require("./index.js");

const dailyGoalSchema = new mongoose.Schema({
  title:String,
  description: String,
  progress: Number,
});

const dailyGoal = mongoose.model("dailyGoal", dailyGoalSchema);

module.exports = dailyGoal;