import React, { useState } from 'react';
import 'react-table-v6/react-table.css';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
function Todolist() {

    const [todo, setTodo] = useState({ date: new Date(), task: '' });
    const [todoList, setTodoList] = useState([]);
 
    const dateChanged = (event) => {
        setTodo({ ...todo, date: event.target.value});
    }

    const inputChanged = (event) => {
        setTodo({ ...todo, task: event.target.value});
    }

    const addTodo = (event) => {
        event.preventDefault();
        setTodoList([...todoList, todo]);
    }

    const deleteTodo =(event) =>{
        setTodoList(todoList.filter((todo, index) => index !== parseInt(event.target.id))); 
    }

    return (
        <div className="container">
            <form onSubmit={addTodo} className="navbar-form">
                <div className="form-group col-md-6">
                    <span className="badge">Date</span>
                        <Grid container justify="space-around">
                            <TextField
                                type="date" className="form-control" value={todo.date} onChange={date =>dateChanged(date)}/>
                        </Grid> 
                </div>
                <div className="form-group col-md-6">
                    <span className="badge">Todo</span>
                     <Grid container justify="space-around">
                        <TextField placeholder="Description" className="form-control" type="text" value={todo.task} onChange={task =>inputChanged(task)} required />
                    </Grid>
                </div>
                <Button onClick={addTodo} variant="contained" color="primary">Add</Button>
            </form>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todoList.map((item, index) =>
                        <TableRow key={index}>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>{item.task}</TableCell>
                            <TableCell><button id={index} onClick={deleteTodo} className="btn btn-warning">Delete</button></TableCell>
                        </TableRow>)}
                </TableBody>
            </Table>
           
    
        </div>
    );
}

export default Todolist;