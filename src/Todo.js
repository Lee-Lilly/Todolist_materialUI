import React, { useState } from 'react';
import 'react-table-v6/react-table.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    } from '@material-ui/pickers';

import TodoTable from './TodoTable';

function Todolist() {

    const [todo, setTodo] = useState({ date: new Date(), task: '' });
    const [todoList, setTodoList] = useState([]);
 
    const dateChanged = date => {
        setTodo({ ...todo, date: date});
    }

    const inputChanged = (event) => {
        setTodo({ ...todo, task: event.target.value});
    }

    const addTodo = (event) => {
        event.preventDefault();
        //add evnt if task are non-empty strings 
        if (todo.task !== ''){
            const newTodo = {date: todo.date, task: todo.task}
            setTodoList([...todoList, newTodo]);
            setTodo({date: new Date(), task:''});
        } 
        else{
            alert('Empty field can not be added');   
        }    
    }

    const clearTodos = () => {
        setTodoList([]);
    }

    const deleteTodo = index => {
        setTodoList(todoList.filter((todo, i) => i !== index)); 
    }

    return (
        <div className="container">
            <form onSubmit={addTodo} className="navbar-form">
                <div className="form-group col-md-6">
                    <label for="date" className="badge">Date</label>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">                    
                            <KeyboardDatePicker
                                autoOk
                                id= "date"
                                margin="normal"
                                label="Date"
                                format="MM/dd/yyyy"
                                className="form-control" 
                                value={todo.date} 
                                onChange={dateChanged}
                                KeyboardButtonProps={{
                                'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider> 
                </div>
                <div className="form-group col-md-4">
                    <label for="task" className="badge">Todo</label>
                     <Grid container justify="space-around">
                        <TextField id="task" label="Description" className="form-control" type="text" value={todo.task} onChange={inputChanged} required/>
                    </Grid>
                </div>
                <Grid container justify="space-around">             
                    <Button id="add" onClick={addTodo} variant="contained" color="primary" size="large">Add</Button>        
                </Grid> 
            </form>
            <TodoTable todos={todoList} deleteTodo={deleteTodo} clearTodos={clearTodos}/>
        </div>
    );
}

export default Todolist;