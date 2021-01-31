import {getConnection, getManager} from "typeorm";
import {Partenaire} from "../entity/Partenaire";
import {OffreEntity} from "../entity/offre";

export class PartenaireRepository {

    public getAllPartenaires() {
        // get Employee repository and find all employees
        return getManager().getRepository(Partenaire).find()
    }

    public getPartenaire(nom: string) {
        // get Employee repository and find all employees
        return getManager().getRepository(Partenaire).findOne({ name: nom });
    }

    public getPartenaireByLastId() {
        // get Employee repository and find all employees
        return getManager().getRepository(Partenaire).findOne({order: {id: 'DESC'} });
    }

    public async saveRepo(partenaire: Partenaire) {
        return getManager().getRepository(Partenaire).save(partenaire);
    }

    public deleteRepo(partenaire: Partenaire) {
        return getManager().getRepository(Partenaire).delete(partenaire);

    }

    public addPartenaire(nom: string, offre: any =null) {
        const newPartenaire: Partenaire = new Partenaire();
        newPartenaire.name = nom;
        newPartenaire.offres = offre;
        getManager().save(newPartenaire);
        return this.getAllPartenaires();
    }

}
