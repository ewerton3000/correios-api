import { IsOptional, IsString } from "class-validator"
import { ReturnCep } from "src/correios/dto/return-cep"
import { CreateEnderecoDto } from "src/endereco/dto/create-endereco.dto"
import { Endereco } from "../../endereco/entities/endereco.entity"
import { Cliente } from "../entities/cliente.entity"

export class CreateClienteDto {
    @IsString()
    nome?: string

    @IsString()
    telefone?: string

    @IsString()
    cep?: string
    
    endereco?: Endereco;
  }