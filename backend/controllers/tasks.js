const { ObjectId } = require('mongodb');
const Task = require('../models/task');

const getAllTasks = async (req, res) => {
  try {
    // find all documents
    // await MyModel.find({});
    const tasks = await Task.find({}); // === const allTasks = await Task.find({});
    // console.log(tasks);

    res.status(200).json({ tasks });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: error.errors.name.properties.message });
  }
};
const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    // console.log(taskID);
    const singleTask = await Task.findOne({ _id: taskID });
    // console.log('Task: ', singleTask);

    //eğer id uzunluğu var olan karakter uzunluğu ile aynı ise fakat bazı karakterler farklı ise aşağıdaki hatayı alırız.
    if (!singleTask) {
      // console.log('girdi 1');
      return res.status(404).json({ message: `No task with id: ${taskID}` });
    }
    // console.log('girdi 2');
    res.status(200).json({ success: true, task: singleTask });
  } catch (error) {
    //ID'nin karakter veya syntax hatası olduğunda döner.
    console.log('Error: ', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    //201 --> created
    return res.status(201).json({ task });
  } catch (error) {
    //500 --> internal server error
    res.status(500).json({
      success: false,
      errorType: error._message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: `No task with id: ${taskID}` });
    }
    res.status(200).json({ name: task.name, completed: task.completed });
  } catch (error) {
    //ID'nin karakter veya syntax hatası olduğunda döner.
    // console.log('girdi 3');
    console.log('Error: ', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.body;
    const _task = await Task.findByIdAndDelete({ _id: id });

    //const targetId = AllTasks.findIndex(target => String(target._id) === id);
    //console.log(targetId)

    if (!_task) {
      return res
        .status(404)
        .json({ success: false, message: `No task with id: ${id}` });
    }
    //console.log("Filtered Task: ",filteredTasks)
    res.status(200).json({ id });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
