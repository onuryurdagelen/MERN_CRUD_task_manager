const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask).delete(deleteTask);
router.route('/:id').get(getSingleTask).patch(updateTask);

module.exports = router;
