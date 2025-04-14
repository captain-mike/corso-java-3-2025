import { Component } from '@angular/core';
import { Pizza } from './interfaces/pizza';
import { PizzaService } from './pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  isCreatingNewPizza:boolean = false;

  pizzaSelezionata:Pizza|null = null;

  constructor(
    private pizzaSvc:PizzaService
  ){}

  ngOnInit(){
    this.pizzaSvc.$pizzaSelezionata.subscribe(pizza => {
      this.pizzaSelezionata = pizza
    })
  }


}
