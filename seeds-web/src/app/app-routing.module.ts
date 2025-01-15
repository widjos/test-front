import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { PaisComponent } from './pais/pais.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { MunicipioComponent } from './municipio/municipio.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { GeografiaComponent } from './geografia/geografia.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { ContratoComponent } from './contrato/contrato.component';


const routes: Routes = [
  { path: '' , component: BienvenidaComponent },
  { path: 'contrato' , component: ContratoComponent },
  { path: 'colaborador' , component: ColaboradorComponent },
  { path: 'pais' , component: PaisComponent },
  { path: 'empresa' , component: EmpresaComponent },
  { path: 'geografia' , component: GeografiaComponent },
  { path: 'departamento' , component: DepartamentoComponent },
  { path: 'municipio' , component: MunicipioComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
