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
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: MainComponent },  // Ruta para el componente principal
  { path: 'horarios', component: HorariosComponent },  // Ruta para el componente Horarios
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HorariosComponent,
    MainComponent,
    SidebarComponent,
    NavbarComponent,
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule.forRoot(routes), // Agrega el RouterModule para las rutas
  ],
  providers: [],
  bootstrap: [AppComponent] // Asegúrate de agregar AppComponent aquí
})
export class AppModule { }


