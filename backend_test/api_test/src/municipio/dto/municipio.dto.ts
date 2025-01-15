import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class MunicipioDto {

    @IsNotEmpty()
    @IsString()
    nombre:string

    @IsNotEmpty()
    @IsNumber()
    id_departamento:number

}