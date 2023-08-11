import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { CorreiosService } from './correios.service';
import { ReturnCep } from './dto/return-cep';
import { CreateClienteDto } from 'src/cliente/dto/create-cliente.dto';
import { response } from 'express';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Controller('correio')
export class CorreiosController {
    constructor(private readonly correiosService: CorreiosService) { }


    @Get('/:cep')
    async findAll(@Param('cep') cep: string): Promise<ReturnCep> {
        return this.correiosService.findAddressByCep(cep)
    }


    @Get('/')
    async findOne(@Body('cep') cep: string): Promise<ReturnCep> {

        return this.correiosService.findAddressByCep(cep)

    }
}
