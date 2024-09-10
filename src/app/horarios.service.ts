import { Injectable } from '@angular/core';

export interface Horario {
  hora: string; 
  lunes?: string; 
  martes?: string; 
  miercoles?: string; 
  jueves?: string; 
  viernes?: string;
}

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  private horariosMaterias: Horario[] = [
    { hora: '08:00 - 09:00', lunes: 'Programación 2', martes: 'Redes', miercoles: '', jueves: 'Matemáticas', viernes: '' },
    { hora: '09:00 - 10:00', lunes: '', martes: 'Algoritmos', miercoles: 'Estructura de Datos', jueves: '', viernes: 'Física' },
    { hora: '10:00 - 11:00', lunes: 'Bases de Datos', martes: '', miercoles: 'Sistemas Operativos', jueves: '', viernes: 'Química' },
    { hora: '11:00 - 12:00', lunes: 'Calculo', martes: 'Programación 2', miercoles: '', jueves: 'Redes', viernes: '' },
  ];

  obtenerHorarios(dia?: string): Horario[] {
    if (dia && dia !== 'Todos los días') {
      return this.horariosMaterias.map(horario => ({
        hora: horario.hora,
        [dia.toLowerCase()]: horario[dia.toLowerCase() as keyof Horario] || ''
      }));
    }
    return this.horariosMaterias;
  }
}
