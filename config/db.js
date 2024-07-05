const { Sequelize } = require("sequelize");

const db = new Sequelize("node", "root", "admin", {
    host: "localhost",
    dialect: "mysql"
})


module.exports = db