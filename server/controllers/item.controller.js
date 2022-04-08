var dailyGoal = require("../database-mongo/Item.model.js");

var selectAll = function (req, res) {
  dailyGoal
    .find({})
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

let addDGoal = function (req, res) {
  let { title, description, progress } = req.body;
  dailyGoal
    .insertMany({ title, description, progress })
    .then((items) => {
      console.log(items, "from addDGoal");
      res.status(200).send(items);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

let deleteDGoal = (req, res) => {
  let { id } = req.params;
  console.log(id, "from deleDGoal");
  dailyGoal
    .deleteOne({ _id: id })
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

let updateDGoal = (req, res) => {
  let { title, description } = req.body;
  let { id } = req.params;
  dailyGoal
    .updateOne({ _id: id }, { title, description })
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

module.exports = { selectAll, addDGoal, deleteDGoal,updateDGoal };
