import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {OffreEntity} from "./offre";

@Entity()
export class MagasinEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    adresse: string;

    @OneToMany(type => OffreEntity, offres => offres.magasins)
    offres: OffreEntity[];

}
