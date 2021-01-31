"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
// @ts-ignore
const dbConfig = require('./DataBase/db.config');
const connection = mysql_1.default.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});
// open the MySQL connection
connection.connect(error => {
    if (error)
        throw error;
    console.log("Successfully connected to the database.");
});
module.exports = connection;
//# sourceMappingURL=db.js.map