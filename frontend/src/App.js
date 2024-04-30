import './App.css';
import { request } from "./axios_helper";
import { useEffect, useState } from "react";
import TaskPanel from "./components/TaskPanel";
import AddTaskForm from "./components/AddTaskForm";
import Button from '@mui/material/Button';

function App() {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      //YOUR CODE HERE
    };

    fetchTasks();
  }, ); // Think about what should trigger this effect

  const handleAddTask = async (newTask) => {
    //YOUR CODE HERE
  };

  const handleDeleteTask = async (id) => {
    //YOUR CODE HERE
  };

  const handleChangeTaskStatus = async (id) => {
    //YOUR CODE HERE
  }

  const handleEditTask = async (id, updatedTask) => {
    //YOUR CODE HERE
  };


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
          <h1>Todo List</h1>
          <Button variant="contained" color="success" sx={{ width: 200 }} onClick={handleOpen}>
            Add task
          </Button>
        </div>
        {/*YOUR CODE HERE*/}
        <AddTaskForm open={open} handleClose={handleClose} handleAddTask={handleAddTask} />
      </div>
  );
}

export default App;
