import { Endereco } from "src/endereco/entities/endereco.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id?: number

    @Column({ length: 100 })
    nome?: string

    @Column({ length: 11 })
    telefone?: string

    @Column({ length: 10 })
    cep?: string

    @OneToOne(type => Endereco, Endereco => Endereco, { cascade: true })
    @JoinColumn({ name: 'enderecoId' })
    endereco: Endereco

    constructor(cliente?: Partial<Cliente>) {
        this.id = cliente?.id
        this.nome = cliente?.nome
        this.telefone = cliente?.telefone
        this.cep = cliente?.cep
    }
}