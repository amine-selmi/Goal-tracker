const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.post("/add", itemController.addDGoal);
router.delete("/delete/:id", itemController.deleteDGoal);
router.patch("/update/:id", itemController.updateDGoal);

module.exports = router;
