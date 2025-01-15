import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { EmpresaService } from '../service/empresa/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css'],
  providers: [ConfirmationService, MessageService]
})


export class EmpresaComponent implements OnInit {

  peritos:any = [];
  nuevoPerito:any = {};

  constructor(private servicioEmpresa: EmpresaService,private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.obtenerPeritos();
  }

  obtenerPeritos(){
    this.servicioEmpresa.buscarEmpresa().subscribe(
      (res) => this.mostrarEmpresa(res)
    )
  }

  eliminarEmpresa(idEmpresa:any){
    this.confirmationService.confirm({
      message: '¿Esta seguro de eliminar esta Empresa?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.servicioEmpresa.eliminarEmpresa(idEmpresa).subscribe(
          (res) => this.obtenerPeritos()
        )
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Usted Elimino el Empresa' });
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

  registrarEmpresa(){
    let formularioPerito:any = document.getElementById('crearPerito');
    if(formularioPerito.reportValidity()){
      
      this.servicioEmpresa.guardarEmpresa(this.nuevoPerito)
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
    this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Su Empresa fue agregado' });

  }

  mostrarEmpresa(empresa:any){
    this.peritos = empresa;
    console.log(this.peritos);
  }
  
  modificarEmpresa(p:any){
    this.nuevoPerito = p;
  }

}
