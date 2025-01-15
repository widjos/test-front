import { Module } from '@nestjs/common';
import { PaisService } from './pais.service';
import { PaisController } from './pais.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PaisService],
  controllers: [PaisController]
})
export class PaisModule {}
