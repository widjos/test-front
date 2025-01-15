import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MunicipioDto } from './dto';
import { MunicipioService } from './municipio.service';

@Controller('municipio')
export class MunicipioController {
          constructor(private muniService:MunicipioService){}
        
            @Post('create')
            onCreate(@Body() dto: MunicipioDto){
                return this.muniService.onCreate(dto);;
            }
        
            @Get()
            findAll() {
              return this.muniService.findAll();
            }
          
            @Get(':id')
            findOne(@Param('id') id: string) {
              return this.muniService.findOne(+id);
            }
          
            @Patch(':id')
            update(@Param('id') id: string, @Body() dto: MunicipioDto) {
              return this.muniService.update(+id, dto);
            }
          
            @Delete(':id')
            remove(@Param('id') id: string) {
              return this.muniService.remove(+id);
            }
}
