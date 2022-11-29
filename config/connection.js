const connection = require('sequelize');
const Sequelize = require('sequelize');
require('dotenv').config();
const fs = require("fs");
const seedQuery = fs.readFileSync("db/seed.sql", {encoding:"utf-8",})

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:'localhost',
        dialect: 'mysql',
        port: 3301,
    }
);
connection.query(seedQuery,err => {
    if(err){
        throw err
    }
    console.log("seeded")
    connection.end()
})
module.exports = sequelize;