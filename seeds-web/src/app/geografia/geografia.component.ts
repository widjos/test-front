import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { GeografiaService } from '../service/geografia/geografia.service';
import { EmpresaService } from '../service/empresa/empresa.service';
import { PaisService } from '../service/pais/pais.service';
import { DepartamentoService } from '../service/departamento/departamento.service';
import { MunicipioService } from '../service/municipio/municipio.service';

@Component({
  selector: 'app-geografia',
  templateUrl: './geografia.component.html',
  styleUrls: ['./geografia.component.css'],
  providers: [ConfirmationService, MessageService]
})


export class GeografiaComponent implements OnInit {

  peritos:any = [];
  nuevoPerito:any = {};
  listEmpresas: any = [];
  listPais: any = [];
  listDepartamento: any = [];
  listMuicipios: any = [];

  constructor(
    private servicioGeografia: GeografiaService,
    private servEmpresa: EmpresaService,
    private servPais: PaisService,
    private servDepartamento: DepartamentoService,
    private servMunicipios: MunicipioService,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.obtenerGeografia();
    this.obtenerEmpresas();
    this.obtenerPaises();
    this.obtenerDepartamentos();
    this.obtenerMunicipios();
  }

  obtenerGeografia(){
    this.servicioGeografia.buscarGeografia().subscribe(
      (res) => this.mostrarGeografia(res)
    )
  }
  
  obtenerEmpresas(){
    this.servEmpresa.buscarEmpresa().subscribe(
      (res) => this.cargarEmpresas(res)
    )
  }

  obtenerPaises(){
    this.servPais.buscarPais().subscribe(
      (res) => this.cargarPaises(res)
    )
  }

  obtenerDepartamentos(){
    this.servDepartamento.buscarDepartamento().subscribe(
      (res) => this.cargarDepartamentos(res)
    )
  }

  obtenerMunicipios(){
    this.servMunicipios.buscarMunicipios().subscribe(
      (res) => this.cargarMunicipios(res)
    )
  }

  eliminarGeografia(idGeografia:any){
    this.confirmationService.confirm({
      message: '¿Esta seguro de eliminar esta Geografia?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.servicioGeografia.eliminarGeografia(idGeografia).subscribe(
          (res) => this.obtenerGeografia()
        )
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Usted Elimino la Geografia' });
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

  registrarGeografia(){
    let formularioPerito:any = document.getElementById('crearPerito');
    if(formularioPerito.reportValidity()){
      
      this.servicioGeografia.guardarGeografia(this.nuevoPerito)
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
    this.obtenerGeografia();
    this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Su Geografia de empresa fue agregado' });

  }

  mostrarGeografia(geografia:any){
    this.peritos = geografia;
    console.log(this.peritos);
  }

  cargarEmpresas(empresa: any){
    this.listEmpresas = empresa;
  }

  cargarPaises(paises:any){
    this.listPais = paises;
  }

  cargarDepartamentos(departamentos:any){
    this.listDepartamento = departamentos;
  }
  
  cargarMunicipios(municipio:any){
    this.listMuicipios = municipio;
  }
  
  modificarGeografia(p:any){
    this.nuevoPerito = p;
  }

}
