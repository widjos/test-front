import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaisModule } from './pais/pais.module';
import { PrismaModule } from './prisma/prisma.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { MunicipioModule } from './municipio/municipio.module';
import { EmpresaModule } from './empresa/empresa.module';
import { GeografiaModule } from './geografia/geografia.module';
import { ContratoModule } from './contrato/contrato.module';
import { ColaboradorModule } from './colaborador/colaborador.module';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
        envFilePath: '.env'
      }
    ),
    PaisModule,
    PrismaModule,
    DepartamentoModule,
    MunicipioModule,
    EmpresaModule,
    GeografiaModule,
    ContratoModule,
    ColaboradorModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
