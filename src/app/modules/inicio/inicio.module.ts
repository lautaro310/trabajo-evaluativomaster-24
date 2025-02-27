import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

// VISTA - PÁGINA - INTERFAZ DEL USUARIO
import { InicioComponent } from './pages/inicio/inicio.component';

// COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';

// COMPONENTES QUE IMPORTAMOS DESDE MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CarruselComponent } from './components/carrusel/carrusel.component';

@NgModule({
  declarations: [
    InicioComponent,
    CardComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    MatButtonModule,
    MatCardModule,
    InicioComponent
  ]
})
export class InicioModule { }
