import { ForbiddenException, Injectable } from '@nestjs/common';
import { EmpresaDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmpresaService {

            constructor(private prisma:PrismaService){}
        
            async onCreate(dto: EmpresaDto){
        
                const newEmpresa = await this.prisma.empresa.create({
                    data: dto
                });
        
                if(!newEmpresa)
                    console.log("Existe un error");
                 
                 return newEmpresa;
            }
        
            async findAll(){
        
                const listaEmpresa = await this.prisma.empresa.findMany({
                    
                    include: {
                        geografia_empresa: {
                            select: {
                                pais_id: {
                                    select: {
                                        nombre:true
                                    }
                                },
                                departamento: {
                                    select: {
                                        nombre: true
                                    }
                                },
                                municipio_id: {
                                    select: {
                                        nombre:true
                                    }
                                }
                            }
                        }
                    }
                });
                return listaEmpresa;
            }
        
            async findOne(id:number){
        
                const empresa = await this.prisma.empresa.findUnique({
                    where: {
                        empresa_id: id
                    }
                })
        
                if(!empresa)
                    console.log("no se encontro");
                 
                return empresa;
        
            }
        
            async remove(id:number){
        
                const removed = await this.prisma.empresa.delete({
                    where: {
                        empresa_id: id
                    }
                });
        
                if(!removed)
                    return new ForbiddenException("No existe");
        
                return { meessage : "Succesful"}
        
            }
        
            async update(id:number, dto:EmpresaDto){
        
                const empresaDto = await this.prisma.empresa.update({
                    where: {
                        empresa_id: id
                    },
                    data : dto
                });
        
                if(!empresaDto)
                    return new ForbiddenException("No existe");
        
                return { meessage : "Succesful"}
            }
}
