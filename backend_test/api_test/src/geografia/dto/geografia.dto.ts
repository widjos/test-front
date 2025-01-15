import {  IsNotEmpty, IsNumber } from "class-validator"

export class GeografiaDto {

    @IsNotEmpty()
    @IsNumber()
    id_municipio:number

    @IsNotEmpty()
    @IsNumber()
    id_departamento:number

    @IsNotEmpty()
    @IsNumber()
    id_pais:number
    
    @IsNotEmpty()
    @IsNumber()
    id_empresa:number

}