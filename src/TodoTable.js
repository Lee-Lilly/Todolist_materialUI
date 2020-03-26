import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

export default function TodoTable(props) {
    return (
        <div className="container">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>
                            <Button variant="contained" color="secondary" size="large"
                                onClick={(e) =>
                                window.confirm('Are you sure to delete all items?') && 
                                props.clearTodos(e)}>
                                Clear All
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.todos.map((item, index) =>
                        <TableRow key={index}>
                            <TableCell>{item.date.toString().substring(0, 15)}</TableCell>
                            <TableCell>{item.task}</TableCell>
                            <TableCell>
                                <IconButton color="primary" aria-label="delete" 
                                    onClick={() => 
                                    window.confirm('Are you sure to delete this item?') && 
                                    props.deleteTodo(index)}>
                                <DeleteIcon fontSize="large"/>
                                </IconButton>
                            </TableCell>
                        </TableRow>)}
                </TableBody>
            </Table>
        </div>
    )
}
