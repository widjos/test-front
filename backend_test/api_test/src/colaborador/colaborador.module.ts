import { Module } from '@nestjs/common';
import { ColaboradorController } from './colaborador.controller';
import { ColaboradorService } from './colaborador.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ColaboradorController],
  providers: [ColaboradorService]
})
export class ColaboradorModule {}
