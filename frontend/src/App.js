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
      const response = await request('get', '/tasks');
      if (response.status === 200) {
        setTasks(response.data);
      } else {
        console.error('Failed to fetch tasks');
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = async (newTask) => {
    try {
      const response = await request('post', '/tasks', newTask);
      if (response.status === 200) {
        setTasks([...tasks, response.data]);
        handleClose();
      } else {
        console.error('Failed to add task');
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      const response = await request('delete', `/tasks/${id}`);
      if (response.status === 200) {
        setTasks(tasks.filter(task => task.id !== id));
      } else {
        console.error('Failed to delete task');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleChangeTaskStatus = async (id) => {
    try {
      const task = tasks.find(task => task.id === id);
      const response = await request('put', `/tasks/${id}`);
      if (response.status === 200) {
        setTasks(tasks.map(task => task.id === id ? response.data : task));
      } else {
        console.error('Failed to change task status');
      }
    } catch (error) {
      console.error('Error changing task status:', error);
    }
  }

  const handleEditTask = async (id, updatedTask) => {
    try {
      const response = await request('put', `/tasks/edit/${id}`, updatedTask);
      if (response.status === 200) {
        setTasks(tasks.map(task => (task.id === id ? {...task, ...updatedTask} : task)));
      } else {
        console.error('Failed to edit task');
      }
    } catch (error) {
      console.error('Error editing task:', error);
    }
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
        {tasks.map(task => (
            <TaskPanel key={task.id} task={task}
                       handleDeleteTask={handleDeleteTask}
                       handleChangeTaskStatus={handleChangeTaskStatus}
                       handleEditTask={handleEditTask}
            />
        ))}
        <AddTaskForm open={open} handleClose={handleClose} handleAddTask={handleAddTask} />
      </div>
  );
}

export default App;
