import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorariosComponent } from './components/horarios/horarios.component';
import { AdministrarMateriasComponent } from './components/administrar-materias/administrar-materias.component';
import { ConvertidorFechasComponent } from './components/convertidor-fechas/convertidor-fechas.component';

const routes: Routes = [
  { path: '', redirectTo: '/horarios', pathMatch: 'full' },  // Ruta predeterminada para ir a horarios
  { path: 'horarios', component: HorariosComponent },
  { path: 'administrar-materias', component: AdministrarMateriasComponent },
  { path: 'convertidor-fechas', component: ConvertidorFechasComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
