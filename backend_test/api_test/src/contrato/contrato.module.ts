import { Module } from '@nestjs/common';
import { ContratoController } from './contrato.controller';
import { ContratoService } from './contrato.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ContratoController],
  providers: [ContratoService]
})
export class ContratoModule {}
