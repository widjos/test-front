import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {AccordionModule} from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import { PaisComponent } from './pais/pais.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { MunicipioComponent } from './municipio/municipio.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { GeografiaComponent } from './geografia/geografia.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { ContratoComponent } from './contrato/contrato.component'




@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    PaisComponent,
    DepartamentoComponent,
    MunicipioComponent,
    EmpresaComponent,
    GeografiaComponent,
    ColaboradorComponent,
    ContratoComponent
  ],
  imports: [
    DropdownModule,
    InputTextModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    CarouselModule,
    CardModule,
    FontAwesomeModule,
    AccordionModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
