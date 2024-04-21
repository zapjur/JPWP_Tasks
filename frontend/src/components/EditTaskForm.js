import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function EditTaskForm({ open, handleClose, handleEditTask, editingTaskId }) {
    const [newTask, setNewTask] = useState({ title: '', description: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEditTaskButton = () => {
        handleEditTask(editingTaskId, newTask);
        handleClose();
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                    name="title"
                    value={newTask.title}
                    onChange={handleInputChange}
                />
                <TextField
                    margin="dense"
                    id="description"
                    label="Description"
                    type="text"
                    fullWidth
                    variant="standard"
                    name="description"
                    value={newTask.description}
                    onChange={handleInputChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleEditTaskButton}>Edit Task</Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditTaskForm;
