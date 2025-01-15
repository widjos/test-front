import { Module } from '@nestjs/common';
import { GeografiaService } from './geografia.service';
import { GeografiaController } from './geografia.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [GeografiaService],
  controllers: [GeografiaController]
})
export class GeografiaModule {}
