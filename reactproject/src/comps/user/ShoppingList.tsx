import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TypeProductData from '../../interfaces/TypeProductData'

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

// function createData(
//     name: string,
//     calories: number,
//     fat: number,
//     carbs: number,
//     protein: number,
//     price: number,
// ) {
//     return {
//         name,
//         calories,
//         fat,
//         carbs,
//         protein,
//         price,
//         history: [
//             { date: '2020-01-05', customerId: '11091700', amount: 3 },
//             { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
//         ],
//     };
// }
//שורה של סוג
function Row(props: { row: TypeProductData }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.kind}
                </TableCell>
                <TableCell align="right">button to add row</TableCell>
                <TableCell align="right">statistic</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                סך הכל: 80 ש"ח
                                {
                                    //סה"כ
                                    row.products.forEach(element => {

                                    })}
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>מוצר</TableCell>
                                        <TableCell>מחיר משוער</TableCell>
                                        <TableCell align="left">?כבר קניתי</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.products.map((historyRow) => (
                                        <TableRow key={historyRow.id}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.name}
                                            </TableCell>
                                            <TableCell>{historyRow.cost}</TableCell>
                                            <TableCell align="right">{historyRow.buyOrNot}</TableCell>
                                            {/* <TableCell align="right">
                                                {Math.round(historyRow.cost * row.id * 100) / 100}
                                            </TableCell> */}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
const rows: TypeProductData[] = [
    {
        enumCategory: "יום הולדת",
        kind: "שתיה",
        products: [
            { id: 1, name: "מים", cost: 0, buyOrNot: true },
            { id: 2, name: "דייט", cost: 0, buyOrNot: false },
            { id: 3, name: "קולה", cost: 0, buyOrNot: true }
        ]
    },
    {
        enumCategory: "יום הולדת",
        kind: "חד פעמי",
        products: [
            { id: 4, name: "כוסות", cost: 0, buyOrNot: true },
            { id: 5, name: "מגשים", cost: 0, buyOrNot: false },
            { id: 6, name: "סכום", cost: 0, buyOrNot: true }
        ]
    },
    {
        enumCategory: "יום הולדת",
        kind: "ממתקים",
        products: [
            { id: 7, name: "עוגת יום הולדת", cost: 0, buyOrNot: true },
            { id: 8, name: "חטיפים", cost: 0, buyOrNot: false },
            { id: 9, name: "שוקולדים", cost: 0, buyOrNot: true }
        ]
    }
]
// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//     createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//     createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//     createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];
export default function CollapsibleTable() {
    return (
        <div className="parent1">
            <div id="div2">
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>יום הולדת</TableCell>
                                <TableCell align="right">button to add kind</TableCell>
                                <TableCell align="right">statistic</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <Row key={row.kind} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
