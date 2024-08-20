import { Component } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})


export class EmpleadosComponent {
  public empleados: any[] = [
    {
      nombre: "Pedro",
      pasante: false,
      edad: 25,
      datos: {
        puesto: "Programación",
        antiguedad: 3
      }
    },
    {
      nombre: "Julieta",
      pasante: false,
      edad: 28,
      datos: {
        puesto: "Programación",
        antiguedad: 1
      }
    },
    {
      nombre: "Joaquin",
      pasante: true,
      edad: 20,
      datos: {
        puesto: "Programación",
        antiguedad: 1
      }
    },
    {
      nombre: "Ricardo",
      pasante: false,
      edad: 50,
      datos: {
        puesto: "Ventas",
        antiguedad: 5
      }
    },
    {
      nombre: "Fabio",
      pasante: true,
      edad: 22,
      datos: {
        puesto: "Programación",
        antiguedad: 0.5
      }
    }
  ];
  

  saludarEmpleado(nombre: string) {
    alert(`Hola, ${nombre}!`)
  }
}
