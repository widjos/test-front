import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../service/departamento/departamento.service';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { PaisService } from '../service/pais/pais.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css'],
  providers: [ConfirmationService, MessageService]
})

export class DepartamentoComponent implements OnInit {

  peritos:any = [];
  nuevoPerito:any = {};
  departamentoList:any = [];

  constructor(
    private servicioDepartamento: DepartamentoService,
    private servicioPais: PaisService,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.obtenerPeritos();
    this.obtenerPaises();
  }

  obtenerPeritos(){
    this.servicioDepartamento.buscarDepartamento().subscribe(
      (res) => this.mostrarPeritos(res)
    )
  }

  obtenerPaises(){
    this.servicioPais.buscarPais().subscribe(
      (res) => this.cargarPaises(res)
    );
  }

  eliminarPerito(idDepartamento:any){
    this.confirmationService.confirm({
      message: '¿Esta seguro de eliminar este departamento?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.servicioDepartamento.eliminarDepartamento(idDepartamento).subscribe(
          (res) => this.obtenerPeritos()
        )
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Usted Elimino el Departamento' });
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
      
      this.servicioDepartamento.guardarDepartamento(this.nuevoPerito)
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
    this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Su departamento fue agregado' });

  }

  mostrarPeritos(perito:any){
    this.peritos = perito;
  
    console.log(this.peritos);
  }

  cargarPaises(paises:any){
    this.departamentoList = paises;
  }
  
  modificarPerito(p:any){
    this.nuevoPerito = p;
  }

}
