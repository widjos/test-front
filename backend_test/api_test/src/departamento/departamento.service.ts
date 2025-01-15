import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DepartamentoDto } from './dto';

@Injectable()
export class DepartamentoService {

        constructor(private prisma:PrismaService){}
    
        async onCreate(dto: DepartamentoDto){
    
            const newDep = await this.prisma.departamento.create({
                data: dto
            });
    
            if(!newDep)
                console.log("Existe un error");
             
             return newDep;
        }
    
        async findAll(){
    
            const listDepartamento = await this.prisma.departamento.findMany({
                include: {
                    pais_id: {
                        select: {
                            nombre: true
                        }
                    }
                }
            });
            return listDepartamento;
        }
    
        async findOne(id:number){
    
            const departamento = await this.prisma.departamento.findUnique({
                where: {
                    departamento_id: id
                }
            })
    
            if(!departamento)
                console.log("no se encontro");
             
            return departamento;
    
        }
    
        async remove(id:number){
    
            const removed = await this.prisma.departamento.delete({
                where: {
                    departamento_id: id
                }
            });
    
            if(!removed)
                return new ForbiddenException("No existe");
    
            return { meessage : "Succesful"}
    
        }
    
        async update(id:number, dto:DepartamentoDto){
    
            const depDto = await this.prisma.departamento.update({
                where: {
                    departamento_id: id
                },
                data : dto
            });
    
            if(!depDto)
                return new ForbiddenException("No existe");
    
            return { meessage : "Succesful"}
        }
}
