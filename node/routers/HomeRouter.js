const { Router } = require("express");

const { mysqlConnection } = require("../sql/sql");

const HomeRouter = Router();

HomeRouter.post('/addUserMessage', (req, res) => {
    const { email, message, role } = req.body;
    const query = `INSERT INTO messages  VALUES (${0},'${email}','${message}','${role}')`;
    mysqlConnection.query(query, (err, result) => {
        if (!err)
            res.send(result);
        else
            res.send(err);
    })
})


module.exports = HomeRouter;