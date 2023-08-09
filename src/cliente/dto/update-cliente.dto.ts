import { PartialType } from '@nestjs/swagger';
import { CreateClienteDto } from './create-cliente.dto';
import { IsString } from 'class-validator';
import { ReturnCep } from 'src/correios/dto/return-cep';
import { CreateEnderecoDto } from '../../endereco/dto/create-endereco.dto';
import { Endereco } from '../../endereco/entities/endereco.entity';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
    @IsString()
    nome: string

    @IsString()
    telefone:string
    
    @IsString()
    cep:string
    
    endereco?: Endereco;
}