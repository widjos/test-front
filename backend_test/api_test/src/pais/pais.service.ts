import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaisDto } from './dto';

@Injectable()
export class PaisService {

    constructor(private prisma:PrismaService){}

    async onCreate(dto: PaisDto){

        const newPais = await this.prisma.pais.create({
            data: dto
        });

        if(!newPais)
            console.log("Existe un error");
         
         return newPais;
    }

    async findAll(){

        const listPais = await this.prisma.pais.findMany();
        return listPais;
    }

    async findOne(id:number){

        const pais = await this.prisma.pais.findUnique({
            where: {
                pais_id: id
            }
        })

        if(!pais)
            console.log("no se encontro");
         
        return pais;

    }

    async remove(id:number){

        const removed = await this.prisma.pais.delete({
            where: {
                pais_id: id
            }
        });

        if(!removed)
            return new ForbiddenException("No existe");

        return { meessage : "Succesful"}

    }

    async update(id:number, dto:PaisDto){

        const paisDto = await this.prisma.pais.update({
            where: {
                pais_id: id
            },
            data : dto
        });

        if(!paisDto)
            return new ForbiddenException("No existe");

        return { meessage : "Succesful"}
    }
    
}
