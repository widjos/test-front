import { Module } from '@nestjs/common';
import { EmpresaController } from './empresa.controller';
import { EmpresaService } from './empresa.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EmpresaController],
  providers: [EmpresaService]
})
export class EmpresaModule {}
