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
    { hora: '08:00 - 09:00', lunes: 'Practica Profesionalizante II', martes: 'Derecho', miercoles: 'Base de datos', jueves: 'Practica Profesionalizante II', viernes: 'Gestion de Proyectos' },
    { hora: '08:00 - 09:00', lunes: 'Practica Profesionalizante II', martes: 'Derecho', miercoles: 'Base de datos', jueves: 'Practica Profesionalizante II', viernes: 'Gestion de Proyectos' },
    { hora: '09:00 - 10:00', lunes: 'Practica Profesionalizante II', martes: 'Derecho', miercoles: 'Base de Datos', jueves: 'Practica Profesionalizante II', viernes: 'Gestion de Proyectos' },
    { hora: '10:00 - 11:00', lunes: 'Redes y Comunicacion', martes: 'Programacion II', miercoles: '', jueves: 'Programacion II', viernes: '' },
    { hora: '11:00 - 12:00', lunes: 'Redes y Comunicacion', martes: 'Programacion II', miercoles: '', jueves: 'Programacion II', viernes: '' },
  ];
  
  obtenerHorarios(dia?: string): Horario[] {
    if (dia && dia !== 'Todos los días') {
      const diaLower = dia.toLowerCase(); 
      return this.horariosMaterias.map(horario => ({
        hora: horario.hora,
        [diaLower]: horario[diaLower as keyof Horario] || '' 
      }));
    }
    return this.horariosMaterias;
  }
}
