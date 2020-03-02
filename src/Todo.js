import React from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

function Todolist() {

    const [task, setTask] = React.useState({ date: '', task: '' });
    const [todos, setTodos] = React.useState([]);

    const inputChanged = (event) => {
        setTask({ ...task, [event.target.name]: event.target.value });
    }

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, task]);
    }

    const deleteTodo =(event) =>{
        event.preventDefault();
        setTodos(todos.filter((todo, index) => index !== parseInt(event.target.id))); 
    }

    const columns =[
        {//first column
            Header: 'Date',
            accessor: 'date' //data comes from date attribute
        },
        {//second column
            Header: 'Todo',
            accessor: 'task' //data comes from task attribute
        },
        { //third column no header, only event controller in cells
            Cell: row => (<button id={row.index} onClick={deleteTodo}>Delete</button>),
            filterable: false,
            sortable: false
        }
    ]

    return (
        <div className="container">
            <form onSubmit={addTodo} className="navbar-form">
                <div className="form-group col-md-6">
                    <span className="badge">Date</span>
                    <input name="date" className="form-control" type="date" value={task.date} onChange={inputChanged} required></input>
                </div>
                <div className="form-group col-md-6">
                    <span className="badge">Todo</span>
                    <input name="task" className="form-control" type="text" value={task.todo} onChange={inputChanged} required></input>
                </div>
                    <input type="submit" className="btn btn-success" value="Add"></input>
            </form>
            <ReactTable data={todos} columns={columns} filterable={true}/>
    
        </div>
    );
}

export default Todolist;