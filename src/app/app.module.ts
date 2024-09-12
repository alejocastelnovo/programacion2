import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

// Angular Material 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

// Componentes
import { HorariosService } from './horarios.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdministrarMateriasComponent } from './components/administrar-materias/administrar-materias.component';
import { ConvertidorFechasComponent } from './components/convertidor-fechas/convertidor-fechas.component';
import { HorariosListComponent } from './components/horarios-list/horarios-list.component';
import { HorariosComponent } from './components/horarios/horarios.component';
// Rutas de la aplicación
const routes: Routes = [
  { path: 'horarios', component: HorariosComponent },
  { path: 'administrar-materias', component: AdministrarMateriasComponent },
  { path: 'convertidor-fechas', component: ConvertidorFechasComponent },
  { path: '', redirectTo: '/horarios', pathMatch: 'full' }, // para ir a horarios por defecto
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    AdministrarMateriasComponent,
    ConvertidorFechasComponent,
    HorariosComponent,
    HorariosListComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [HorariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
