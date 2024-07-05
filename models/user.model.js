const { STRING, INTEGER } = require("sequelize");
const db = require("../config/db");

let User = db.define("User", {
    username: STRING,
    password: STRING,
    email: STRING,
    number: INTEGER

});

module.exports = User;