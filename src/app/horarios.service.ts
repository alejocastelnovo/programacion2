import { Injectable } from '@angular/core';

export interface Horario {
  dia: string; 
  materia: string; 
  horaInicio: string; 
  horaFin: string; 
}

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  private horariosMaterias: Horario[] = [
    { dia: 'Lunes', materia: 'Programación 2', horaInicio: '08:00', horaFin: '08:40' },
    { dia: 'Martes', materia: 'Redes', horaInicio: '09:00', horaFin: '09:40' },

  ];

  obtenerHorarios(dia?: string): Horario[] {
    if (dia && dia !== 'Todos los días') {
      return this.horariosMaterias.filter(horario => horario.dia === dia);
    }
    return this.horariosMaterias;
  }

  agregarHorario(horario: Horario): number {
    this.horariosMaterias.push(horario);
    return 1; 
  }
}
