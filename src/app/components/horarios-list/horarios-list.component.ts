import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HorariosService, Horario } from 'src/app/horarios.service';

@Component({
  selector: 'app-horarios-list',
  templateUrl: './horarios-list.component.html',
  styleUrls: ['./horarios-list.component.css']
})
export class HorariosListComponent implements OnInit, OnChanges {
  @Input() selectedDay!: string;  // Recibimos el día seleccionado como entrada
  horarios: Horario[] = [];
  displayedColumns: string[] = ['hora'];

  constructor(private horariosService: HorariosService) {}

  ngOnInit(): void {
    this.loadHorarios();
  }

  // Detecta cambios en el día seleccionado y carga los horarios correspondientes
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedDay']) {
      this.loadHorarios();
    }
  }

  loadHorarios(): void {
    if (this.selectedDay === 'Todos los días') {
      this.displayedColumns = ['hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
    } else {
      this.displayedColumns = ['hora', this.selectedDay.toLowerCase()];
    }
    this.horarios = this.horariosService.obtenerHorarios(this.selectedDay);
  }
}
