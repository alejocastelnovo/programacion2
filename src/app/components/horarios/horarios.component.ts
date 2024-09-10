import { Component, Output } from '@angular/core';


@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent {
  selectedDay: string = 'Todos los días';


  onDayChange(dia: string): void {
    this.selectedDay = dia;
  }
}
