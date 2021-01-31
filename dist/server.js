"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authentification_1 = require("./src/controller/authentification");
const routeProtector_1 = require("./src/controller/routeProtector");
const mysql = require("mysql");
const dbConfig = require("../config/db.config.ts");
// import {DataBaseController} from "./src/DataBase/db.controller";
const config = require('./src/DataBase/db.config');
const ProtectedRoutes = express_1.default.Router();
const app = express_1.default();
const auth = new authentification_1.AuthentificationMaker();
const protect = new routeProtector_1.RouteProtector(ProtectedRoutes);
// const mdb: DataBaseController = new DataBaseController();
app.use('/api', ProtectedRoutes);
app.set('Secret', config.SECRET);
app.use(morgan_1.default('dev'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to meteorTest application." });
});
auth.create(app, jsonwebtoken_1.default);
protect.Protect(app, jsonwebtoken_1.default);
ProtectedRoutes.get('/getAllProducts', (req, res) => {
    let products = [
        {
            id: 1,
            name: "cheese"
        },
        {
            id: 2,
            name: "carottes"
        }
    ];
    console.log('lewee:', req.params.sonPer);
    res.json({ body: products, infoParam: req.query.sonPer });
});
const connection = mysql.createConnection({
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
// set port, listen for requests
app.listen(3001, () => {
    console.log("Server is running on port 3001.");
});
//# sourceMappingURL=server.js.map