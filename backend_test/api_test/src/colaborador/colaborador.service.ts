import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ColaboradorDto } from './dto/colaborador.dto';
import { colaborador } from '@prisma/client';

@Injectable()
export class ColaboradorService {

           constructor(private prisma:PrismaService){}
        
            async onCreate(dto: ColaboradorDto){
        
                const newColaborador = await this.prisma.colaborador.create({
                    data: dto
                });
        
                if(!newColaborador)
                    console.log("Existe un error");
                 
                 return newColaborador;
            }
        
            async findAll(){
        
                const listColaborador = await this.prisma.colaborador.findMany({
                    include: {
                        contrato_colaborador: {
                            select: {
                                empresa_id: {
                                    select: {
                                        nombre: true
                                    }
                                }
                            }
                        }
                    }
                });
                return listColaborador;
            }
        
            async findOne(id:number){
        
                const colaborador = await this.prisma.colaborador.findUnique({
                    where: {
                        colaborador_id: id
                    }
                })
        
                if(!colaborador)
                    console.log("no se encontro");
                 
                return colaborador;
        
            }
        
            async remove(id:number){
        
                const removed = await this.prisma.colaborador.delete({
                    where: {
                        colaborador_id: id
                    }
                });
        
                if(!removed)
                    return new ForbiddenException("No existe");
        
                return { meessage : "Succesful"}
        
            }
        
            async update(id:number, dto:ColaboradorDto){
        
                const depDto = await this.prisma.colaborador.update({
                    where: {
                        colaborador_id: id
                    },
                    data : dto
                });
        
                if(!depDto)
                    return new ForbiddenException("No existe");
        
                return { meessage : "Succesful"}
            }

}
