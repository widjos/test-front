import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class PaisDto {

    @IsNotEmpty()
    @IsString()
    nombre:string

    @IsNotEmpty()
    @IsNumber()
    codigo:number

}