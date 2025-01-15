import { ForbiddenException, Injectable } from '@nestjs/common';
import { ContratoDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContratoService {

    constructor(private prisma: PrismaService) { }

    async onCreate(dto: ContratoDto) {

        const newContrato = await this.prisma.contrato.create({
            data: dto
        });

        if (!newContrato)
            console.log("Existe un error");

        return newContrato;
    }

    async findAll() {

        const listContrato = await this.prisma.contrato.findMany({
            include: {
                empresa_id: {
                    select: {
                        nombre: true
                    }
                },
                colaborador_id: {
                    select: {
                        nombre: true,
                    }
                }
            }
        });
        return listContrato;
    }

    async findOne(id: number) {

        const contrato = await this.prisma.contrato.findUnique({
            where: {
                contrato_id: id
            },
            include: {
                empresa_id: {
                    select: {
                        nombre: true
                    }
                },
                colaborador_id: {
                    select: {
                        nombre: true
                    }
                }
            }
        })

        if (!contrato)
            console.log("no se encontro");

        return contrato;

    }

    async remove(id: number) {

        const removed = await this.prisma.contrato.delete({
            where: {
                contrato_id: id
            }
        });

        if (!removed)
            return new ForbiddenException("No existe");

        return { meessage: "Succesful" }

    }

    async update(id: number, dto: ContratoDto) {

        const contratoDto = await this.prisma.contrato.update({
            where: {
                contrato_id: id
            },
            data: dto
        });

        if (!contratoDto)
            return new ForbiddenException("No existe");

        return { meessage: "Succesful" }
    }
}
