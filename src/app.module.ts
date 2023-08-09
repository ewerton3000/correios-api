import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { CorreiosModule } from './correios/correios.module';
import { EnderecoModule } from './endereco/endereco.module';

@Module({
  imports: [ClienteModule, CorreiosModule, EnderecoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }