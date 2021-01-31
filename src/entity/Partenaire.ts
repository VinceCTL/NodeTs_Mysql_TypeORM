import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {OffreEntity} from "./offre";

@Entity()
export class Partenaire {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // @Column()
    // offres: string;

    @ManyToMany(type => OffreEntity, offres => offres.partenaires)
    @JoinTable()
    offres: OffreEntity[];
}

