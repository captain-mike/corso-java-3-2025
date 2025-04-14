import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ModificaComponent } from './pages/modifica/modifica.component';
import { CreaComponent } from './pages/crea/crea.component';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { MenuComponent } from './main-components/header/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Layout1Component } from './layout/layout1/layout1.component';
import { Layout2Component } from './layout/layout2/layout2.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModificaComponent,
    CreaComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    Layout1Component,
    Layout2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
