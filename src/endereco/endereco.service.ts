import { Inject, Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Endereco } from './entities/endereco.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EnderecoService {
  constructor(
    @Inject('ENDERECO_REPOSITORY')
    private enderecoRepository: Repository<Endereco>,

  ) { }
  create(createEnderecoDto: CreateEnderecoDto) {
    return this.enderecoRepository.save(createEnderecoDto);
  }

  findAll() {
    return this.enderecoRepository.find();
  }

  findOne(id: number) {
    return this.enderecoRepository.findOne({ where: { id } });
  }

  update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    return this.enderecoRepository.update(id, updateEnderecoDto);
  }

  remove(id: number) {
    return this.enderecoRepository.delete(id);
  }
}