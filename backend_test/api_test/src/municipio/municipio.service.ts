import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MunicipioDto } from './dto';

@Injectable()
export class MunicipioService {

           constructor(private prisma:PrismaService){}
        
            async onCreate(dto: MunicipioDto){
        
                const newMuni = await this.prisma.municipio.create({
                    data: dto
                });
        
                if(!newMuni)
                    console.log("Existe un error");
                 
                 return newMuni;
            }
        
            async findAll(){
        
                const listMunicipios = await this.prisma.municipio.findMany({
                    include: {
                        departemento_id: {
                            select: {
                                nombre: true
                            }
                        }
                    }
                });
                return listMunicipios;
            }
        
            async findOne(id:number){
        
                const municipio = await this.prisma.municipio.findUnique({
                    where: {
                        municipio_id: id
                    }
                })
        
                if(!municipio)
                    console.log("no se encontro");
                 
                return municipio;
        
            }
        
            async remove(id:number){
        
                const removed = await this.prisma.municipio.delete({
                    where: {
                        municipio_id: id
                    }
                });
        
                if(!removed)
                    return new ForbiddenException("No existe");
        
                return { meessage : "Succesful"}
        
            }
        
            async update(id:number, dto:MunicipioDto){
        
                const municipioDto = await this.prisma.municipio.update({
                    where: {
                        municipio_id: id
                    },
                    data : dto
                });
        
                if(!municipioDto)
                    return new ForbiddenException("No existe");
        
                return { meessage : "Succesful"}
            }
}
