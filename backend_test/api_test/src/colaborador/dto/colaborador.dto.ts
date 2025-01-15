import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class ColaboradorDto {

    @IsNotEmpty()
    @IsString()
    nombre:string

    @IsNotEmpty()
    @IsNumber()
    edad:number

    @IsNotEmpty()
    @IsNumber()
    telefono:number
    
    @IsNotEmpty()
    @IsEmail()
    correo:string

}