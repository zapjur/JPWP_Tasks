import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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
        <Card sx={{ display: 'flex', width: 1000}}>
            <CardContent sx={{ flex: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {task.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {task.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ flexDirection: 'row', justifyContent: 'space-around', padding: '10px' }}>
                <Button size="small" color="success" onClick={() => handleChangeTaskStatus(task.id)}>
                    {task.done ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/> }
                </Button>
                <Button size="small" color="primary" sx = {{ gap: 1 }} onClick={handleEditOpen}>
                    <EditIcon/>
                    Edit
                </Button>
                <Button size="small" color="error" sx = {{ gap: 1 }} onClick={() => handleDeleteTask(task.id)}>
                    <DeleteForeverIcon/>
                    Delete
                </Button>
            </CardActions>
        </Card>

        <EditTaskForm open={editOpen} handleClose={handleEditClose} handleEditTask={handleEditTask} editingTaskId={task.id} />
        </>
    );
}

export default TaskPanel;
