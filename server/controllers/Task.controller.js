var task = require("../database-mongo/Task.model.js");
var dailyGoal = require("../database-mongo/Item.model.js");


let addTask = function (req, res) {
    let {description,idGoal} = req.body;
    task
      .insertMany({description,idGoal})
      .then((results) => {
        console.log(results,'results')
        dailyGoal.findById(results[0].idGoal).then(result=>{
          console.log(result ,'lenaaaa result')
          result.tasks.push(results[0])
          console.log(result, 'from find by id from add task')
          dailyGoal.updateOne({_id:result._id},{tasks:result.tasks})
          .then((result) => {
            // res.status(200).send(result)
            console.log(result,'updated version')
          })
          .catch((err) => res.status(500).send(err));
        })
        // console.log(results, "from addTask");
        res.status(200).send(results);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  };

  var selectAll = function (req, res) {
    task
      .find({})
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  };

  let getTasksByIdGoal = (req,res)=>{
    let {idGoal}= req.params
    task.find({idGoal}).then((results) => {
      res.status(200).send(results);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

let updateTaskStatus = (req,res)=>{
  let {id}= req.params 
  task.updateOne({_id:id}, {status:true}).then((results) => {
    res.status(200).send(results);
  })
  .catch((error) => {
    res.status(500).send(error);
  });
};


let getCompleteTasks = (req,res)=>{
  let {idGoal}= req.params 
  task.find({idGoal, status:true}).then((results) => {
    res.status(200).send(results);
  })
  .catch((error) => {
    res.status(500).send(error);
  });
};

module.exports = { addTask, selectAll,getTasksByIdGoal,updateTaskStatus,getCompleteTasks };