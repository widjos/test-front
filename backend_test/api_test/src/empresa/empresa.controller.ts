import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaDto } from './dto';

@Controller('empresa')
export class EmpresaController {

          constructor(private empresaServicio:EmpresaService){}
        
            @Post('create')
            onCreate(@Body() dto: EmpresaDto){
                return this.empresaServicio.onCreate(dto);;
            }
        
            @Get()
            findAll() {
              return this.empresaServicio.findAll();
            }
          
            @Get(':id')
            findOne(@Param('id') id: string) {
              return this.empresaServicio.findOne(+id);
            }
          
            @Patch(':id')
            update(@Param('id') id: string, @Body() dto: EmpresaDto) {
              return this.empresaServicio.update(+id, dto);
            }
          
            @Delete(':id')
            remove(@Param('id') id: string) {
              return this.empresaServicio.remove(+id);
            }
}
