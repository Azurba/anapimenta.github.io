import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HeroComponent } from './Components/hero/hero.component';
import { SobreComponent } from './Components/sobre/sobre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AgendamentoComponent } from './Components/agendamento/agendamento.component';
import { AgendamentoOptions } from './Data/AgendamentoOptions';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { ServicosComponent } from './Components/servicos/servicos.component';
import { FooterComponent } from './Components/footer/footer.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    SobreComponent,
    AgendamentoComponent,
    ServicosComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MdbCarouselModule,
    MatDividerModule
  ],
  providers: [AgendamentoOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
