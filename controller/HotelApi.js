let connection = require('../DBConfig/DbConnection');

let createCategory = (req, res) => {
    try {
        const Category_Name = req.body;
        console.log(Category_Name);
        let createCategoryQuery = `insert into category set ?`;
        connection.query(createCategoryQuery, Category_Name, (error, results) => {
            return res.json({
                status: true,
                affectedRows: results.affectedRows,
                message: 'Data Inserted Successfully'
            })

        })
    }
    catch (error) {
        return res.json({
            status: false,
            message: error.message
        })
    }
}

let createMenuItems = (req, res) => {
    try {
        console.log(req.body);
        const menuItems = req.body
        let fetchQuery = `insert into menuitems set ?`;
        connection.query(fetchQuery, menuItems, (error, results) => {
            return res.json({
                status: true,
                affectedRows: results.affectedRows,
                message: 'Data Inserted Successfully'
            })
        })
    }
    catch (error) {
        return res.json({
            status: false,
            message: error.message
        })
    }
}


let fetchItemsAsPerCategory = (req, res) => {
    try {
        console.log(req.params);
        let fetchQuery = `SELECT MenuItems.Id, MenuItems.Item_Name
            FROM MenuItems
            INNER JOIN Category ON MenuItems.Category_Id = Category.Category_Id
            WHERE Category.Category_name= ? `;
        connection.query(fetchQuery, req.query.category.split(','), (error, result) => {
            return res.json({
                status: true,
                data: result
            })

        })
    }
    catch (error) {
        return res.json({
            status: false,
            message: error.message
        })
    }
}

module.exports = { createCategory, createMenuItems, fetchItemsAsPerCategory }