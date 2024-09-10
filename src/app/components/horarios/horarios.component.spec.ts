import { Component } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent {
  diaSeleccionado: string = 'todos';

  cargarHorarios(dia: string) {
    this.diaSeleccionado = dia; // Actualiza el día seleccionado
  }
}
