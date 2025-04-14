import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreaComponent } from './pages/crea/crea.component';
import { ModificaComponent } from './pages/modifica/modifica.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "crea-pizza",
    component: CreaComponent
  },
  {
    path: "modifica-pizza/:id",
    component: ModificaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
