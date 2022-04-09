const router = require('express').Router();
const taskController = require("../controllers/Task.controller");

router.get("/", taskController.selectAll);
router.post("/add", taskController.addTask);

module.exports = router;