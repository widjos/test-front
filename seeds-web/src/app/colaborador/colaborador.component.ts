import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { ColaboradorService } from '../service/colaborador/colaborador.service';


@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css'],
  providers: [ConfirmationService, MessageService]
})

export class ColaboradorComponent implements OnInit {

  peritos:any = [];
  nuevoPerito:any = {};

  constructor(private servicioColaborador: ColaboradorService,private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.obtenerColaborador();
  }

  obtenerColaborador(){
    this.servicioColaborador.buscarColaborador().subscribe(
      (res) => this.mostrarColaborador(res)
    )
  }

  eliminarColaborador(idColaborador:any){
    this.confirmationService.confirm({
      message: '¿Esta seguro de eliminar esta Colaborador?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.servicioColaborador.eliminarColaborador(idColaborador).subscribe(
          (res) => this.obtenerColaborador()
        )
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Usted Elimino el Colaborador' });
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

  registrarColaborador(){
    let formularioPerito:any = document.getElementById('crearPerito');
    if(formularioPerito.reportValidity()){
      
      this.servicioColaborador.guardarColaborador(this.nuevoPerito)
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
    this.obtenerColaborador();
    this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Su Colaborador fue agregado' });

  }

  obtenerEmpresas(listEmpresas:any) {
    let contratos:string = "";
    const myList = listEmpresas;
    myList.forEach((element:any) => {
        contratos += "\n"+ element.empresa_id.nombre;
    });

    return contratos;
  }

  mostrarColaborador(colaborador:any){
    this.peritos = colaborador;
    console.log(this.peritos);
  }
  
  modificarColaborador(p:any){
    this.nuevoPerito = p;
  }

}
