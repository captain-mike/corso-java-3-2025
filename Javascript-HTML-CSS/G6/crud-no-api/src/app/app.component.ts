import { Component } from '@angular/core';
import { Pizza } from './interfaces/pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  isCreatingNewPizza:boolean = false;

  pizze:Pizza[] = [
    { id: 1, gusto: 'Margherita', prezzo: 6.5, disp: true },
    { id: 2, gusto: 'Diavola', prezzo: 7.5, disp: true },
    { id: 3, gusto: 'Quattro Formaggi', prezzo: 8, disp: false },
    { id: 4, gusto: 'Prosciutto e Funghi', prezzo: 7, disp: true },
    { id: 5, gusto: 'Vegetariana', prezzo: 7.2, disp: false },
  ];

  deletePizza(id:number){
    const index = this.pizze.findIndex(p => p.id === id);
    this.pizze.splice(index, 1);

    this.pizze = this.pizze.filter(p => p.id != id);

  }

  pizzaSelezionataPerModifica!:Pizza;
  startEditingPizza(pizza:Pizza){
    this.pizzaSelezionataPerModifica = pizza
  }


  addNewPizza(newPizza:Pizza){

    newPizza.id = this.pizze.length + 1;//Questo solo perché non abbiamo un backend, quindi cerchiamo di simulare l'id che si autoincrementa

    this.pizze.push(newPizza)
  }

}
