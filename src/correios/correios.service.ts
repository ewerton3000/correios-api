import { HttpService } from '@nestjs/axios';
import { BadRequestException, Body, Injectable, NotFoundException } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { ReturnCep } from './dto/return-cep';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { ClienteService } from 'src/cliente/cliente.service';
import { CreateClienteDto } from 'src/cliente/dto/create-cliente.dto';

require('custom-env').env(true)

@Injectable()
export class CorreiosService {
    URL_CORREIOS = process.env.URL_CEP_CORREIOS
    ClienteService: any;
    clienteRepository: ClienteService;
    CorreiosService: CorreiosService;

    constructor(
        private readonly httpService: HttpService) { }

    async findAddressByCep(cep: string): Promise<ReturnCep> {
        const test = new Cliente()
        const returnCep: ReturnCep = await this.httpService.axiosRef
            .get<ReturnCep>(this.URL_CORREIOS.replace('{CEP}', cep))
            .then((result) => {
                console.log(result)
                if (result.data.erro === 'true') {
                    throw new NotFoundException('CEP not found')
                }
                return result.data
            })

            .catch((error: AxiosError) => {
                throw new BadRequestException(
                    `Error in connection request ${error.message}`,)
            })
        return returnCep
    }
}

