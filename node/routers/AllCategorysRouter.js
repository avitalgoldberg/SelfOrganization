const { Router } = require("express");

const { mysqlConnection } = require("../sql/sql");

const AllCategorysRouter = Router();

//http://localhost:8080/allcategorys/getCategories
AllCategorysRouter.get('/getCategories', (req, res) => {
    const query = `SELECT idCategorys, CategoryName, CategoryImg FROM mydb.categorys;`;
    mysqlConnection.query(query, (err, rows) => {
        if (!err)
            res.send(rows);
        else
            res.send(err);
    })
})

//http://localhost:8080/allcategorys/getPropCategoryById/1
AllCategorysRouter.get('/getPropCategoryById/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT idProperty, propertyName, PropertiesType, valuess 
                   FROM mydb.propertiestocateroy
                   WHERE cateroyId=${id}`;
    mysqlConnection.query(query, (err, row) => {
        if (!err)
            res.send(row);
        else
            res.send(err);
    })
})
//בפוסטמן
//localhost:8080/allcategorys/getLongServiceById/1 
//בדפדפן  
//http://localhost:8080/allcategorys/getLongServiceById/1
AllCategorysRouter.get('/getLongServiceById/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT ServicesName,ServicesImg, shortDescription, longDescription,ServicesProviderPhone, ServicesProviderEmail
                   FROM mydb.services
                   WHERE idServices=${id}`;
    mysqlConnection.query(query, (err, row) => {
        if (!err)
            res.send(row);
        else
            res.send(err);
    })
})

// /getCategoriesById/:id/:name/:age    localhost:8080/getCategoriesById/2/חנה/45

module.exports = AllCategorysRouter;