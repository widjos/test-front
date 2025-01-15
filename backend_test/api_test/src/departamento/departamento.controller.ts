import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { DepartamentoDto } from './dto';

@Controller('departamento')
export class DepartamentoController {

      constructor(private depService:DepartamentoService){}
    
        @Post('create')
        onCreate(@Body() dto: DepartamentoDto){
            return this.depService.onCreate(dto);;
        }
    
        @Get()
        findAll() {
          return this.depService.findAll();
        }
      
        @Get(':id')
        findOne(@Param('id') id: string) {
          return this.depService.findOne(+id);
        }
      
        @Patch(':id')
        update(@Param('id') id: string, @Body() dto: DepartamentoDto) {
          return this.depService.update(+id, dto);
        }
      
        @Delete(':id')
        remove(@Param('id') id: string) {
          return this.depService.remove(+id);
        }
}
