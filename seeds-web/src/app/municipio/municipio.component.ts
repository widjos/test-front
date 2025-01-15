import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { MunicipioService } from '../service/municipio/municipio.service';
import { DepartamentoService } from '../service/departamento/departamento.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.css'],
  providers: [ConfirmationService, MessageService]
})

export class MunicipioComponent implements OnInit {

  peritos:any = [];
  departamentoList:any = [];
  nuevoPerito:any = {};

  constructor(
    private servicioMunicipio: MunicipioService,
    private servicioDepartamento: DepartamentoService,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.obtenerPeritos();
    this.obtenerDepartamentos();
  }

  obtenerPeritos(){
    this.servicioMunicipio.buscarMunicipios().subscribe(
      (res) => this.mostrarPeritos(res)
    )
  }

  obtenerDepartamentos(){
    this.servicioDepartamento.buscarDepartamento().subscribe(
      (res) => this.cargarDepartamentos(res)
    )
  }

  eliminarPerito(idMunicipio:any){
    this.confirmationService.confirm({
      message: '¿Esta seguro de eliminar este municipio?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.servicioMunicipio.eliminarMunicipios(idMunicipio).subscribe(
          (res) => this.obtenerPeritos()
        )
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Usted Elimino el municipio' });
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Declinado', detail: 'Olvidar' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelado', detail: 'Se cancelado la acción.' });
            break;
        }
      }
    });

  }

  registrarPerito(){
    let formularioPerito:any = document.getElementById('crearPerito');
    if(formularioPerito.reportValidity()){
      
      this.servicioMunicipio.guardarMunicipios(this.nuevoPerito)
        .subscribe(
          (res:any) => this.finalizarGuardar(res)
        );
        formularioPerito.reset();
    }else{
      this.messageService.add({ severity: 'warn', summary: 'Alerta', detail: 'Debe llenar todos los campos.' });
    }
  }

  finalizarGuardar(res:any){
    console.log(res);
    this.obtenerPeritos();
    this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Su municipio fue agregado' });

  }

  mostrarPeritos(perito:any){
    this.peritos = perito;
    console.log(this.peritos);
  }

  cargarDepartamentos(dep:any){
    this.departamentoList = dep;
  }
  
  modificarPerito(p:any){
    this.nuevoPerito = p;
  }

}
