import { PartialType } from "@nestjs/swagger"
import { IsString } from "class-validator"
import { CreateClienteDto } from "src/cliente/dto/create-cliente.dto"
import { CreateEnderecoDto } from "src/endereco/dto/create-endereco.dto"

export class UpdateEnderecoDto extends PartialType (CreateEnderecoDto){
    @IsString()
    logradouro: string
    
    @IsString()
    complemento: string

    @IsString()
    bairro:string

    @IsString()
    localidade: string

    @IsString()
    uf: string

    @IsString()
    ibge:string

    @IsString()
    gia:string

    @IsString()
    ddd:string

    @IsString()
    siafi:string

    
}