import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default function TodoTable(props) {
   
    return (
        <div className="container">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.todos.map((item, index) =>
                        <TableRow key={index}>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>{item.task}</TableCell>
                            <TableCell><button id={index} className="btn btn-warning" onClick={props.deleteTodo}>Delete</button></TableCell>
                        </TableRow>)}
                </TableBody>
            </Table>
        </div>
    )
}
