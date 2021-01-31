import "reflect-metadata";
import * as bodyParser from "body-parser";
import "reflect-metadata";
import {PartenaireController} from "./controller/partenaire.controller";
import jwt from 'jsonwebtoken';
import {AuthentificationMaker} from "./service/authentification";
import express = require("express");
import {RouteProtector} from "./service/routeProtector";
import {createConnection} from "typeorm";
import {OffreController} from "./controller/offre.controller";
import {MagasinController} from "./controller/magasin.controller";

const app = express();
const ProtectedRoutes = express.Router();
const partenaireController: PartenaireController = new PartenaireController();
const offreController: OffreController = new OffreController();
const magasinController: MagasinController = new MagasinController();
const authenticator: AuthentificationMaker = new AuthentificationMaker();
const protect: RouteProtector = new RouteProtector(ProtectedRoutes);

app.use(bodyParser.json());
app.use('/api', ProtectedRoutes);
app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", process.env.PORT || 3001);
app.set('Secret', 'meteorTest');

app.get("/", (req, res) => {
    res.json({ message: "Welcome to meteorTest application." });
});


authenticator.create(app, jwt);
protect.Protect(app, jwt);

ProtectedRoutes.get("/getAllPartenaires", partenaireController.getAllPartenaires);
ProtectedRoutes.get("/addPartenaire", partenaireController.addPartenaire);
ProtectedRoutes.get("/addOffre", offreController.addOffer);
ProtectedRoutes.get("/addMagasin", magasinController.addMagasin);
ProtectedRoutes.get("/getAllOffres", offreController.getAllOffres);
ProtectedRoutes.get("/getPartenaire", partenaireController.getPartenaire);


createConnection().then(async connection => {
    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);
    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);
}).catch(error => console.log(error));

app.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
