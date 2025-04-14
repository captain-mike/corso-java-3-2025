import { PizzaService } from './../../pizza.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Pizza } from '../../interfaces/pizza';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss'
})
export class CreateFormComponent {


  constructor(
    private pizzaSvc:PizzaService
  ){}

  newPizza:Partial<Pizza> = {
    gusto: '',
    prezzo: 0,
    disp: false
  }

  create(){
    this.pizzaSvc.add(this.newPizza);
  }

}
