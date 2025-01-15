import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { GeografiaDto } from './dto';
import { GeografiaService } from './geografia.service';

@Controller('geografia')
export class GeografiaController {

    constructor(private geografiaDto: GeografiaService) { }

    @Post('create')
    onCreate(@Body() dto: GeografiaDto) {
        return this.geografiaDto.onCreate(dto);;
    }

    @Get()
    findAll() {
        return this.geografiaDto.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.geografiaDto.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: GeografiaDto) {
        return this.geografiaDto.update(+id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.geografiaDto.remove(+id);
    }
}
