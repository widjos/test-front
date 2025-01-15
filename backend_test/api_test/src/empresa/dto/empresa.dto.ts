import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class EmpresaDto {

    @IsNotEmpty()
    @IsNumber()
    nit:number

    @IsNotEmpty()
    @IsString()
    razon_social:string

    @IsNotEmpty()
    @IsString()
    nombre:string

    @IsNotEmpty()
    @IsNumber()
    telefono:number
    
    @IsNotEmpty()
    @IsEmail()
    correo:string

}