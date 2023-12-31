import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { EnderecoController } from './endereco.controller';
import { DatabaseModule } from 'src/database/database.module';
import { enderecoProviders } from './endereco.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [EnderecoController],
  providers: [...enderecoProviders, EnderecoService]
})
export class EnderecoModule { }