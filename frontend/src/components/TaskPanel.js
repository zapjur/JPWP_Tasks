import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Button, CardActions } from '@mui/material';
import EditTaskForm from "./EditTaskForm";
import {useState} from "react";


function TaskPanel({ task, handleDeleteTask, handleChangeTaskStatus, handleEditTask }) {

    const [editOpen, setEditOpen] = useState(false);

    const handleEditOpen = () => setEditOpen(true);
    const handleEditClose = () => setEditOpen(false);

    return (
        <>
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {task.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {task.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="success" onClick={() => handleChangeTaskStatus(task.id)}>
                    {task.done ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/> }
                </Button>
                <Button size="small" color="primary" onClick={handleEditOpen}>
                    Edit
                </Button>
                <Button size="small" color="error" onClick={() => handleDeleteTask(task.id)}>
                    Delete
                </Button>
            </CardActions>
        </Card>

        <EditTaskForm open={editOpen} handleClose={handleEditClose} handleEditTask={handleEditTask} editingTaskId={task.id} />
        </>
    );
}

export default TaskPanel;
