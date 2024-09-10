import { Component, Input, OnInit } from '@angular/core';
import { HorariosService, Horario } from 'src/app/horarios.service';

@Component({
  selector: 'app-horarios-list',
  templateUrl: './horarios-list.component.html',
  styleUrls: ['./horarios-list.component.css']
})
export class HorariosListComponent implements OnInit {
  @Input() selectedDay!: string;
  horarios: Horario[] = [];
  displayedColumns: string[] = ['dia', 'materia', 'horaInicio', 'horaFin'];

  constructor(private horariosService: HorariosService) {}

  ngOnInit(): void {
    this.loadHorarios();
  }

  ngOnChanges(): void {
    this.loadHorarios();
  }

  loadHorarios(): void {
    this.horarios = this.horariosService.obtenerHorarios(this.selectedDay);
  }
}
