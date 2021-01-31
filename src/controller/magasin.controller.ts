import {Request, Response} from "express";
import {MagasinRepository} from "../repositories/magasin.repository";
import {MagasinEntity} from "../entity/magasin";

export class MagasinController {

    constructor() {
    }

    public async addMagasin(req: Request, res: Response) {
        const magRepo = new MagasinRepository();
        const newMag = new MagasinEntity();
        try {
            newMag.nom = req.body.name;
            newMag.adresse = req.body.adresse;
            magRepo.saveMagasin(newMag).then(mag => {
                console.log(mag);
                res.send(mag);
            })
        }
        catch (e) {
            console.log(e);
            return
        }
    }
}
