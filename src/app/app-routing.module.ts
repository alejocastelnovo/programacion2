import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorariosComponent } from './components/horarios/horarios.component';

const routes: Routes = [
  { path: '', redirectTo: '/horarios', pathMatch: 'full' },  // Ruta predeterminada redirige a 'horarios'
  { path: 'horarios', component: HorariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
