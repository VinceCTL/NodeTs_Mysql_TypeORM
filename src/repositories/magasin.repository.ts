import {Request, Response} from "express";
import {getManager} from "typeorm";
import {OffreEntity} from "../entity/offre";
import {MagasinEntity} from "../entity/magasin";

export class MagasinRepository {
    constructor() {
    }

    public saveMagasin(magasin: MagasinEntity) {
        return getManager().getRepository(MagasinEntity).save(magasin);
    }

    // public getBails(magasin: MagasinEntity) {
    //     return getManager().getRepository(MagasinEntity).findOne({oc})
    // }

}
