import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ColaboradorDto } from './dto/colaborador.dto';
import { ColaboradorService } from './colaborador.service';

@Controller('colaborador')
export class ColaboradorController {

        constructor(private colabServicio:ColaboradorService){}
        
            @Post('create')
            onCreate(@Body() dto: ColaboradorDto){
                return this.colabServicio.onCreate(dto);;
            }
        
            @Get()
            findAll() {
              return this.colabServicio.findAll();
            }
          
            @Get(':id')
            findOne(@Param('id') id: string) {
              return this.colabServicio.findOne(+id);
            }
          
            @Patch(':id')
            update(@Param('id') id: string, @Body() dto: ColaboradorDto) {
              return this.colabServicio.update(+id, dto);
            }
          
            @Delete(':id')
            remove(@Param('id') id: string) {
              return this.colabServicio.remove(+id);
            }

}
