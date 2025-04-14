import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../../interfaces/pizza';
import { PizzaService } from '../../pizza.service';

@Component({
  selector: '.app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {

  @Input() singolaPizza!:Pizza;

  constructor(
    private pizzaSvc:PizzaService
  ){}


  get dispText(){
    return this.singolaPizza.disp ? 'Disponibile' : 'Non Disponibile';
  }

  delete(){
    this.pizzaSvc.delete(this.singolaPizza.id);
  }

  select(){
    this.pizzaSvc.$pizzaSelezionata.next(this.singolaPizza)
  }

}
