import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ContratoService } from './contrato.service';
import { ContratoDto } from './dto';

@Controller('contrato')
export class ContratoController {

    constructor(private contratoService: ContratoService) { }

    @Post('create')
    onCreate(@Body() dto: ContratoDto) {
        return this.contratoService.onCreate(dto);;
    }

    @Get()
    findAll() {
        return this.contratoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.contratoService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: ContratoDto) {
        return this.contratoService.update(+id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.contratoService.remove(+id);
    }
}
