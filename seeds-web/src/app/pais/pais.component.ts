import { Component, OnInit } from '@angular/core';
import { PaisService } from '../service/pais/pais.service';
import { LazyLoadEvent, ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';


@Component({
  selector: 'app-perito',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class PaisComponent implements OnInit {

  peritos:any = [];
  nuevoPerito:any = {};

  constructor(private servicioPerito: PaisService,private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.obtenerPeritos();
  }

  obtenerPeritos(){
    this.servicioPerito.buscarPais().subscribe(
      (res) => this.mostrarPeritos(res)
    )
  }

  eliminarPerito(idPerito:any){
    this.confirmationService.confirm({
      message: '¿Esta seguro de eliminar este Pais?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.servicioPerito.eliminarPais(idPerito).subscribe(
          (res) => this.obtenerPeritos()
        )
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Usted Elimino el Pais' });
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
      
      this.servicioPerito.guardarPais(this.nuevoPerito)
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
    this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Su pais fue agregado' });

  }

  mostrarPeritos(perito:any){
    this.peritos = perito;
    console.log(this.peritos);
  }
  
  modificarPerito(p:any){
    this.nuevoPerito = p;
  }

}
