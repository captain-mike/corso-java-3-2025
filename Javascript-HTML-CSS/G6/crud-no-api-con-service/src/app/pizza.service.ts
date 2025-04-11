import { Injectable } from '@angular/core';
import { Pizza } from './interfaces/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  pizze:Pizza[] = [
      { id: 1, gusto: 'Margherita', prezzo: 6.5, disp: true },
      { id: 2, gusto: 'Diavola', prezzo: 7.5, disp: true },
      { id: 3, gusto: 'Quattro Formaggi', prezzo: 8, disp: false },
      { id: 4, gusto: 'Prosciutto e Funghi', prezzo: 7, disp: true },
      { id: 5, gusto: 'Vegetariana', prezzo: 7.2, disp: false },
  ];

  getAll():Pizza[]{
    return this.pizze
  }

  getById(id:number):Pizza|undefined{
    return this.pizze.find(p => p.id === id)
  }

  add(newPizza:Partial<Pizza>):void{
    newPizza.id = this.pizze.length + 1;
    this.pizze.push((newPizza as Pizza));
  }

  delete(id:number):void{
    this.pizze = this.pizze.filter(p => p.id != id);
  }

  update(pizza:Pizza):void{
    const index = this.pizze.findIndex(p => p.id === pizza.id);
    this.pizze[index]  = pizza;
  }

}
