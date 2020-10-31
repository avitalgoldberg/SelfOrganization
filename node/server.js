
const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const serverc = require('./server/courses.js');
const cors = require('cors');

var app = express();
//Configuring express server
app.use(bodyparser.json());
app.use(cors());

//MySQL details
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'mydb',
    multipleStatements: true
});

//Establish the server connection
//PORT ENVIRONMENT VARIABLE


mysqlConnection.connect((err) => {
    if (!err)
        console.log('Connection Established Successfully');
    else
        console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
});

const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));


// app.get('/advertising', (req, res) => {
//     //const id = req.query.id;
//     mysqlConnection.query('SELECT * FROM advertising ', [], (err, rows, fields) => {
//         if (!err)
//             res.send(rows);
//         else
//             console.log(err);
//     })
// })

// app.get('/permission/:id', (req, res) => {
//     mysqlConnection.query('SELECT * FROM permission WHERE id=? and  =?', [req.params.id,], (err, rows, fields) => {
//         if (!err)
//             res.send(rows);
//         else
//             console.log(err);
//     })
// })

// app.post('/api/course', (req, res) => {
//     const { error } = validateCourse(req.body);
//     if (error) return res.status(400).send(result.error.details[0].message);
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };
//     let x = serverc.msg(course)
//     res.send(x);
// });








