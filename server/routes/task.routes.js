const router = require('express').Router();
const taskController = require("../controllers/Task.controller");

router.get("/", taskController.selectAll);
router.get("/completed/:idGoal", taskController.getCompleteTasks);
router.get("/:idGoal", taskController.getTasksByIdGoal);
router.post("/add", taskController.addTask);
router.patch("/:id", taskController.updateTaskStatus);



module.exports = router;