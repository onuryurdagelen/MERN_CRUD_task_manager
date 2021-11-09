const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
const tasks = require('./routes/tasks');

const connectDB = require('./db/connect');

//.dotenv dosyalarını kullanmak için aşağıdaki gibi kodları yazmalıyız.
require('dotenv').config();

//TODO:middleware
app.use(express.json());

//TODO:routes
app.get('/', (req, res) => {
  res.send('<h1>Task manager app</h1>');
});

app.use('/api/v1/tasks', tasks);

// app.get('/api/v1/tasks');        -get all the tasks
// app.post('/api/v1/tasks');       -create a new task
// app.get('/api/v1/tasks/:id');    -get single task
// app.patch('/api/v1/tasks/:id');  -update task
// app.delete('/api/v1/tasks/:id'); -delete task

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('CONNECTED TO DB...');
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
