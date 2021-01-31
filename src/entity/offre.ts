import {Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Partenaire} from "./Partenaire";
import {MagasinEntity} from "./magasin";

@Entity()
export class OffreEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    dateOfCreation: Date;

    @ManyToMany(type => Partenaire, partenaires => partenaires.offres)
    partenaires: Partenaire[];

    @ManyToOne(type => MagasinEntity, magasins => magasins.offres)
    magasins: MagasinEntity[];
}
