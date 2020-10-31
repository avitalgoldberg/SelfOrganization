import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { createStyles, Theme } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import ProductData from '../../interfaces/ProductData'
const useStyles = makeStyles({
    table: {
        maxWidth: 400,
    },
});

const useStylesInput = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
    }),
);


export default function ShoppingList() {
    const classes = useStyles();
    const classes2 = useStylesInput();
    const [rows, setRows] = useState<ProductData[]>([{ id: 1, name: "מצעים", cost: 150 }, { id: 2, name: "מגבות מטבח", cost: 55.5 },])
    return (
        <div className="parent">
            <div id="div2">ShoppingList</div>
            <div id="div1">
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">מחיר</TableCell>
                                <TableCell align="right">מוצר</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell align="right" component="th" scope="row">
                                        <InputBase
                                            className={classes2.margin}
                                            defaultValue={row.cost}
                                            inputProps={{ 'aria-label': 'naked' }}
                                        //onChange={(e) => textChange(e)}
                                        /></TableCell>
                                    <TableCell align="right">
                                        <InputBase
                                            className={classes2.margin}
                                            defaultValue={row.name}
                                            inputProps={{ 'aria-label': 'naked' }}
                                        //onChange={(e) => textChange(e)}
                                        /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
