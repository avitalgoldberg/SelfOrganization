import React, { useEffect, useState } from 'react'
import InviteData from '../../interfaces/InviteData';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './InvitedTable.css';
import { createStyles, Theme } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
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

export default function InvitedTable() {
    const classes = useStyles();
    const classes2 = useStylesInput();
    const [rows, setRows] = useState<InviteData[]>([
        { id: 1, name: "אברהם", address: "פינקל", phone: "0581111111", email: "avraam@gmail.com", remarks: "עבר דירה" },
        { id: 2, name: "יצחק", address: "רוזובסקי", phone: "0582222222", email: "", remarks: "" },
        { id: 3, name: "יעקב", address: "קהילות יעקב", phone: "0583333333", email: "", remarks: "" },
        { id: 4, name: "משה", address: "מנחת שלמה", phone: "0584444444", email: "mg@gmail.com", remarks: "לברר כתובת של הבת" },
        { id: 5, name: "אהרון", address: "מנחם בגין", phone: "0585555555", email: "a05855@gmail.com", remarks: "" },])
    //איתחול נתונים
    useEffect(() => {
        //עדכון המסד נתונים לקראת סוף חיי הקומפוננטה
        return () => {
            console.log('destroy', rows)
            //קריאה לשרת ושולחת את rows
        };
    }, []);
    //בעת שינוי state עדכון ה

    const handleChange = (e: any, idx: number, field: 'name' | 'email' | 'address' | 'phone' | 'remarks') => {
        let arr = [...rows];
        arr[0][field] = e.target.value;
        setRows(arr)

    }
    return (
        <div className="parent1">
            <div id="div2">
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">הערות</TableCell>
                                <TableCell align="right">מייל</TableCell>
                                <TableCell align="right">טלפון</TableCell>
                                <TableCell align="right">כתובת</TableCell>
                                <TableCell align="right">שם</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, idx) => (
                                <TableRow key={row.id}>
                                    <TableCell align="right" component="th" scope="row">
                                        <InputBase
                                            className={classes2.margin}
                                            defaultValue={row.remarks}
                                            inputProps={{ 'aria-label': 'naked' }}
                                            onChange={(e) => handleChange(e, idx, 'remarks')}
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <InputBase
                                            className={classes2.margin}
                                            defaultValue={row.email}
                                            inputProps={{ 'aria-label': 'naked' }}
                                            onChange={(e) => handleChange(e, idx, 'email')}
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <InputBase
                                            className={classes2.margin}
                                            defaultValue={row.phone}
                                            inputProps={{ 'aria-label': 'naked' }}
                                            onChange={(e) => handleChange(e, idx, 'phone')}
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <InputBase
                                            className={classes2.margin}
                                            defaultValue={row.address}
                                            inputProps={{ 'aria-label': 'naked' }}
                                            onChange={(e) => handleChange(e, idx, 'address')}
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <InputBase
                                            className={classes2.margin}
                                            defaultValue={row.name}
                                            inputProps={{ 'aria-label': 'naked' }}
                                            onChange={(e) => handleChange(e, idx, 'name')}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

