import { type } from "os";
import { Cliente } from "src/cliente/entities/cliente.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CreateClienteDto } from "../../cliente/dto/create-cliente.dto";

@Entity()
export class Endereco {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100 })
    logradouro: string

    @Column({ length: 100 })
    complemento: string

    @Column({ length: 100 })
    bairro: string

    @Column({ length: 100 })
    localidade: string

    @Column({ length: 2 })
    uf: string

    @Column({ length: 100 })
    ibge: string

    @Column({ length: 100 })
    gia: string

    @Column({ length: 2 })
    ddd: string

    @Column({ length: 100 })
    siafi: string

    @OneToOne(type => Cliente, endereco => Endereco)
    cliente : Cliente
    
    constructor(endereco?: Partial<Endereco>) {
        this.id = endereco?.id
        this.logradouro = endereco?.logradouro
        this.complemento = endereco?.complemento
        this.bairro = endereco?.bairro
        this.ddd = endereco?.ddd
        this.gia = endereco?.gia
    }

}