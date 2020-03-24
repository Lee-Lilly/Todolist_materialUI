import React, { useState } from 'react';
import 'react-table-v6/react-table.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import TodoTable from './TodoTable';

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

    const clearTodos = (event) => {
        event.preventDefault();
        setTodoList([]);
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
                            type="date" placeholder="Date" className="form-control" value={todo.date} onChange={date =>dateChanged(date)}/>
                        </Grid> 
                </div>
                <div className="form-group col-md-6">
                    <span className="badge">Todo</span>
                     <Grid container justify="space-around">
                        <TextField placeholder="Description" className="form-control" type="text" value={todo.task} onChange={task =>inputChanged(task)} required />
                    </Grid>
                </div>
                <Button onClick={addTodo} variant="contained" color="primary" float="left">Add</Button>
                <Button onClick={clearTodos} variant="contained" color="secondary" float="right">Clear All</Button>
            
            </form>
            <TodoTable todos={todoList} deleteTodo={deleteTodo}/>
        </div>
    );
}

export default Todolist;