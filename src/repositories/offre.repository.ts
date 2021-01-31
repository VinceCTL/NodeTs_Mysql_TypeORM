import {getManager} from "typeorm";
import {OffreEntity} from "../entity/offre";

export class OffreRepository {
    constructor() {
    }

    public getAllOffres() {
        return getManager().getRepository(OffreEntity).find();
    }

    public getLastOffre() {
        return getManager().getRepository(OffreEntity).findOne({order: {id: 'DESC'} });
    }

    public saveOffre(offre: OffreEntity) {
        return getManager().getRepository(OffreEntity).save(offre);

    }

}
