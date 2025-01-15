import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { EmpresaService } from '../service/empresa/empresa.service';
import { ContratoService } from '../service/contrato/contrato.service';
import { ColaboradorService } from '../service/colaborador/colaborador.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css'],
  providers: [ConfirmationService, MessageService]
})


export class ContratoComponent implements OnInit {

  peritos:any = [];
  nuevoPerito:any = {};
  listEmpresa:any = [];
  listColaborador:any = [];

  constructor(
    private readonly contratoServicio: ContratoService,
    private readonly colaboradorServicio: ColaboradorService,
    private readonly empresaServicio: EmpresaService,
    private readonly confirmationService: ConfirmationService, 
    private readonly messageService: MessageService) { }

  ngOnInit(): void {
    this.obtenerContratos();
    this.obtenerEmpresas();
    this.obtenerColaboradores();
  }

  obtenerContratos(){
    this.contratoServicio.buscarContrato().subscribe(
      (res) => this.mostrarContrato(res)
    )
  }

  obtenerEmpresas(){
    this.empresaServicio.buscarEmpresa().subscribe(
      (res) => this.cargarEmpresas(res)
    )
  }

  obtenerColaboradores(){
    this.colaboradorServicio.buscarColaborador().subscribe(
      (res) => this.cargarColaboradores(res)
    )
  }

  eliminarContrato(idContrato:any){
    this.confirmationService.confirm({
      message: '¿Esta seguro de eliminar esta Contrato?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.contratoServicio.eliminarContrato(idContrato).subscribe(
          (res) => this.obtenerContratos()
        )
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Usted Elimino el Contrato' });
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

  registrarContrato(){
    let formularioPerito:any = document.getElementById('crearPerito');
    if(formularioPerito.reportValidity()){
      
      this.contratoServicio.guardarContrato(this.nuevoPerito)
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
    this.obtenerContratos();
    this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Su Contrato fue agregado' });

  }

  mostrarContrato(contrato:any){
    this.peritos = contrato;
    console.log(this.peritos);
  }

  cargarEmpresas(empresa: any){
    this.listEmpresa = empresa;
  }

  cargarColaboradores(colaborador: any){
    this.listColaborador = colaborador;
  }

  
  modificarContrato(p:any){
    this.nuevoPerito = p;
  }

}
