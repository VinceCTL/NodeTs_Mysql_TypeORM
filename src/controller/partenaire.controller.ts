import { Request, Response } from "express";
import {PartenaireRepository} from "../repositories/partenaire.repository";
import {Partenaire} from "../entity/Partenaire";
import {OffreRepository} from "../repositories/offre.repository";
import {OffreEntity} from "../entity/offre";

export class PartenaireController {

    constructor() {
    }

    public getAllPartenaires = async (req: Request, res: Response) => {
        let partenaireRepo: PartenaireRepository = new PartenaireRepository();

        console.log("Received GetAllEmployees ==> GET");

        try {

            partenaireRepo.getAllPartenaires().then((result: any) => {
                console.log("Result : " + result);
                res.send(result);
            });
        }
        catch (e) {
            console.log("CATCH");
            console.log('errrrre: ', e);
            return ;
        }
    }

    public async getPartenaire(req: Request, res: Response) {
        let partenaireRepo: PartenaireRepository = new PartenaireRepository();

        console.log("Received GetEmployees ==> GET");

        try {
            partenaireRepo.getPartenaire(req.body.name).then((result: any) => {
                console.log("Result : " + result);
                res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            return;
        }
    }

    public async addOfferToPartenaire(name: string, offre: OffreEntity) {
        let partenaireRepo: PartenaireRepository = new PartenaireRepository();

        partenaireRepo.getPartenaire(name).then(last => {
            console.log('the last One : ', last);
        })

    }

    public async addPartenaire(req: Request, res: Response) {
        let partenaireRepo: PartenaireRepository = new PartenaireRepository();

        try {
            const newPartenaire: Partenaire = new Partenaire();
            newPartenaire.name = req.body.name;
            newPartenaire.offres = req.body.offres;
            partenaireRepo.saveRepo(newPartenaire).then(part => {
                console.log('rr', part);
                res.send(part);
            })
        }
        catch (e) {
            console.log(e);
            return;
        }
    }
}


