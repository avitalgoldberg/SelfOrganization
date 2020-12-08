const { Router } = require("express");

const { mysqlConnection } = require("../sql/sql");

const StartRouter = Router();

//signup
StartRouter.post('/signup', (req, res) => {
    const { idUsers, usersName, usersCode, usersEmail, dateStart, dateLastChange } = req.body;
    //בדיקה האם שם המשתמש קיים
    const query = `SELECT * FROM users WHERE UsersName = '${usersName}'`;
    console.log("check name");
    mysqlConnection.query(query, (err, rows) => {
        console.log("name result", rows);
        if (!err)
            if (rows.length > 0)
                res.send("The user name is exists.");
            else {
                //אם איןןכזה שם משתמש - אפשר להוסיף אותו!!!!
                const signupQuery = `INSERT INTO users  VALUES (${0},'${usersName}','${usersCode}','${usersEmail}','${dateStart}','${dateLastChange}')`;
                console.log("check add");
                mysqlConnection.query(signupQuery, (err, result) => {
                    console.log("add result", result);
                    if (!err)
                        res.send({ id: result.insertId, msg: "success" });
                    else
                        res.send(err)
                });

            }
        else
            res.send("Sorry, something is not going well...");

    })
})

module.exports = StartRouter;