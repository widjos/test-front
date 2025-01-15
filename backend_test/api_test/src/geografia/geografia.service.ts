import { ForbiddenException, Injectable } from '@nestjs/common';
import { GeografiaDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GeografiaService {

               constructor(private prisma:PrismaService){}
            
                async onCreate(dto: GeografiaDto){
            
                    const newGeografia = await this.prisma.geografia.create({
                        data: dto
                    });
            
                    if(!newGeografia)
                        console.log("Existe un error");
                     
                     return newGeografia;
                }
            
                async findAll(){
            
                    const listaGeografia = await this.prisma.geografia.findMany({
                        include: {
                            empresa_id: {
                                select: {
                                    nombre: true
                                }
                            },
                            pais_id: {
                                select: {
                                    nombre: true
                                }
                            },
                            departamento: {
                                select: {
                                    nombre: true
                                }
                            },
                            municipio_id: {
                                select: {
                                    nombre: true
                                }
                            }
                        }
                    });
                    return listaGeografia;
                }
            
                async findOne(id:number){
            
                    const colaborador = await this.prisma.geografia.findUnique({
                        where: {
                            geografia_id: id
                        }
                    })
            
                    if(!colaborador)
                        console.log("no se encontro");
                     
                    return colaborador;
            
                }
            
                async remove(id:number){
            
                    const removed = await this.prisma.geografia.delete({
                        where: {
                            geografia_id: id
                        }
                    });
            
                    if(!removed)
                        return new ForbiddenException("No existe");
            
                    return { meessage : "Succesful"}
            
                }
            
                async update(id:number, dto:GeografiaDto){
            
                    const depDto = await this.prisma.geografia.update({
                        where: {
                            geografia_id: id
                        },
                        data : dto
                    });
            
                    if(!depDto)
                        return new ForbiddenException("No existe");
            
                    return { meessage : "Succesful"}
                }
    

}
