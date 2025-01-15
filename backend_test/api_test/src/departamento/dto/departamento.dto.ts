import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class DepartamentoDto {

    @IsNotEmpty()
    @IsString()
    nombre:string

    @IsNotEmpty()
    @IsNumber()
    id_pais:number

}