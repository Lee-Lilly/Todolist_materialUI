import React from 'react';

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
        console.log(todos); //initial state of todolist
        let index = event.target.id; //get event index
        console.log(index);
        todos.splice(index, 1);  //delete the element
        console.log(todos); // todolist after deleted one element
        setTodos([...todos]); //set the component state for rendering
    }

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
       
            <table className="table table-striped text-center table-responsive" id="todolist">
                <thead>
                    <tr>
                        <th className="text-center">Date</th>
                        <th className="text-center">TODOs</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) =>
                            <tr key={index}>
                                <td>{todo.date}</td>
                                <td>{todo.task}</td>
                                <td><button className="btn btn-danger" onClick={deleteTodo} id = {index}>Delete</button></td>
                            </tr>)
                    }
                </ tbody>
            </table>
        </div>
    );
}

export default Todolist;