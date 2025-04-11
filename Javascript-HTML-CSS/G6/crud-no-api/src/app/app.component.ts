import { Component } from '@angular/core';
import { Pizza } from './interfaces/pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  pizze:Pizza[] = [
    { id: 1, gusto: 'Margherita', prezzo: 6.5, disp: true },
    { id: 2, gusto: 'Diavola', prezzo: 7.5, disp: true },
    { id: 3, gusto: 'Quattro Formaggi', prezzo: 8, disp: false },
    { id: 4, gusto: 'Prosciutto e Funghi', prezzo: 7, disp: true },
    { id: 5, gusto: 'Vegetariana', prezzo: 7.2, disp: false },
  ];

}
