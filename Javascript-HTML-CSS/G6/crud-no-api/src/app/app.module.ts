import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './crud-components/list/list.component';
import { ListItemComponent } from './crud-components/list-item/list-item.component';
import { CreateFormComponent } from './crud-components/create-form/create-form.component';
import { UpdateFormComponent } from './crud-components/update-form/update-form.component';
import { DeleteButtonComponent } from './crud-components/delete-button/delete-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    CreateFormComponent,
    UpdateFormComponent,
    DeleteButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
