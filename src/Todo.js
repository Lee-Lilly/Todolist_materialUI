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

    return (
        <div class="container">
            <form onSubmit={addTodo} class="navbar-form">
                <div class="form-group col-md-6">
                    <span class="badge">Date</span>
                    <input name="date" class="form-control" type="date" value={task.date} onChange={inputChanged} required></input>
                </div>
                <div class="form-group col-md-6">
                    <span class="badge">Todo</span>
                    <input name="task" class="form-control" type="text" value={task.todo} onChange={inputChanged} required></input>
                </div>
                    <input type="submit" class="btn btn-success" value="Add"></input>
            </form>
       
            <table class="table table-striped text-center table-responsive" id="todolist">
                <thead>
                    <tr>
                        <th class="text-center">Date</th>
                        <th class="text-center">TODOs</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) =>
                            <tr key={index}>
                                <td>{todo.date}</td>
                                <td>{todo.task}</td>
                            </tr>)
                    }
                </ tbody>
            </table>
        </div>
    );
}

export default Todolist;