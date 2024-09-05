import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {

  materias: string[] = [
    'Bases de Datos II',
    'Derecho y Legislación Laboral',
    'Gestión de Proyectos',
    'Programación II',
    'Práctica Profesional II',
    'Redes y Comunicación'
  ];
  



}
