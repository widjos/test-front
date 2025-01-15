import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PaisService } from './pais.service';
import { PaisDto } from './dto';

@Controller('pais')
export class PaisController {

    constructor(private paisService:PaisService){}

    @Post('create')
    onCreate(@Body() dto: PaisDto){
        return this.paisService.onCreate(dto);;
    }

    @Get()
    findAll() {
      return this.paisService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.paisService.findOne(+id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() paisDto: PaisDto) {
      return this.paisService.update(+id, paisDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.paisService.remove(+id);
    }
  
}
