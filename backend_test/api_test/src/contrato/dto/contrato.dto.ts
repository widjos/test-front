import {  IsNotEmpty, IsNumber } from "class-validator"

export class ContratoDto {

    @IsNotEmpty()
    @IsNumber()
    id_empresa:number

    @IsNotEmpty()
    @IsNumber()
    id_colaborador:number



}