import { Component, OnInit } from '@angular/core';
import {  faUser, 
          faBuilding, 
          faIdCardClip, 
          faPeopleRoof, 
          faGlobe, 
          faBuildingColumns,
          faLocationPin
        } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  options: any = [
    {
      tittle: 'Colaborador',
      route: '/colaborador',
      icon: faUser,
    },
    {
      tittle: 'Contratos',
      route: '/contrato',
      icon: faPeopleRoof,
    },
    {
      tittle: 'Empresa',
      route: '/empresa',
      icon: faBuilding,
    },
    {
      tittle: 'Geografia',
      route: '/geografia',
      icon: faLocationPin,
    },
    {
      tittle: 'Pais',
      route: '/pais',
      icon: faIdCardClip
    },
    {
      tittle: 'Departamento',
      route: '/departamento',
      icon: faGlobe
    },
    {
      tittle: 'Municipio',
      route: '/municipio',
      icon: faBuildingColumns
    },
  ]

  constructor() { }

  name: string = '';
  saludo: string = '';

  ngOnInit(): void {


  }

  saludar() {
    this.saludo = 'Hola ' + this.name + ' mucho gusto';

  }


}
