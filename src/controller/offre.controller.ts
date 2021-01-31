import {Request, Response} from "express";
import {OffreRepository} from "../repositories/offre.repository";
import {OffreEntity} from "../entity/offre";


export class OffreController {
    constructor() {
    }

    public async getAllOffres(req: Request, res: Response) {
        const offreRepository = new OffreRepository();
        try {
            offreRepository.getAllOffres().then(offre => {
                console.log(offre);
                res.send(offre);
            })
        }
        catch (e) {
            console.log(e);
            return;
        }
    }

    public async addOffer(req: Request, res: Response) {
        const offreRepo: OffreRepository = new OffreRepository();
        const newOffre: OffreEntity = new OffreEntity();
        newOffre.partenaires = [];

        try {
            newOffre.name = req.body.name;
            newOffre.dateOfCreation = new Date();
            newOffre.partenaires.push(req.body.partenaires);
            offreRepo.saveOffre(newOffre).then(offre => {
                console.log(offre);
                res.send(offre);
            })
        }
        catch (e) {
            console.log('error', e);
            return;
        }
    }
}
