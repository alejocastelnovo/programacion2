import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdministrarMateriasComponent } from './components/administrar-materias/administrar-materias.component';
import { ConvertidorFechasComponent } from './components/convertidor-fechas/convertidor-fechas.component';
import { AppRoutingModule } from './app-routing.module';



const routes: Routes = [
  { path: 'horarios', component: HorariosComponent },
  { path: 'administrar-materias', component: AdministrarMateriasComponent },
  { path: 'convertidor-fechas', component: ConvertidorFechasComponent },
  { path: '', redirectTo: '/horarios', pathMatch: 'full' }, // para ir a horarios x defecto
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HorariosComponent,
    SidebarComponent,
    NavbarComponent,
    AdministrarMateriasComponent,
    ConvertidorFechasComponent,

],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)],
  ],

  exports: [RouterModule] ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
