import { Injectable } from '@angular/core';

export interface Horario {
  dia: string;
  materia: string;
  hora: string;
}

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  private horariosMaterias: Horario[] = [
    { dia: 'lunes', materia: 'Matemáticas', hora: '08:00 - 09:30' },
    { dia: 'martes', materia: 'Ciencias', hora: '09:30 - 11:00' },
    // Otros horarios...
  ];

  obtenerHorarios(): Horario[] {
    return this.horariosMaterias;
  }

  agregarHorario(horario: Horario): number {
    try {
      this.horariosMaterias.push(horario);
      return 1;
    } catch {
      return -1;
    }
  }
}
