import { Component, Output } from '@angular/core';
import { HorariosService, Horario } from 'src/app/horarios.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent {
  selectedDay: string = 'Todos los días';
  nuevoHorario: string = 'Nuevo Horario';

  onDayChange(dia: string): void {
    this.selectedDay = dia;
  }



}


