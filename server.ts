import express, {Express} from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import jwt from 'jsonwebtoken';
import {AuthentificationMaker} from "./src/service/authentification";
import {RouteProtector} from "./src/service/routeProtector";

const mysql = require("mysql");
const dbConfig = require("../config/db.config.ts");
// import {DataBaseController} from "./src/DataBase/db.controller";
const config = require('./src/DataBase/db.config');
const ProtectedRoutes = express.Router();
const app: Express = express();
const auth: AuthentificationMaker = new AuthentificationMaker();
const protect: RouteProtector = new RouteProtector(ProtectedRoutes);
// const mdb: DataBaseController = new DataBaseController();

app.use('/api', ProtectedRoutes);
// app.set('Secret', config.SECRET);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to meteorTest application." });
});

auth.create(app, jwt);
protect.Protect(app, jwt);

ProtectedRoutes.get('/getAllProducts',(req,res)=>{
  let products = [
    {
      id: 1,
      name:"cheese"
    },
    {
      id: 2,
      name:"carottes"
    }
  ]
  console.log('lewee:', req.params.sonPer);
  res.json({body: products, infoParam: req.query.sonPer});
})

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});



// set port, listen for requests
app.listen(3001, () => {
  console.log("Server is running on port 3001.");
});
