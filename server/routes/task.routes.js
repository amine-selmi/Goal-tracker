const router = require('express').Router();
const taskController = require("../controllers/Task.controller");

router.get("/", taskController.selectAll);
router.get("/:idGoal", taskController.getTasksByIdGoal);
router.post("/add", taskController.addTask);

module.exports = router;