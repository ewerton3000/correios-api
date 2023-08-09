import { Module } from '@nestjs/common';
import { CorreiosService } from './correios.service';
import { CorreiosController } from './correios.controller';
import { HttpModule } from '@nestjs/axios';
import { ClienteModule } from 'src/cliente/cliente.module';

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),
    ClienteModule
  ],
  providers: [CorreiosService],
  controllers: [CorreiosController]
})
export class CorreiosModule { }
