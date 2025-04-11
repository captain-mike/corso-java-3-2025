import { Component, EventEmitter, Output } from '@angular/core';
import { Pizza } from '../../interfaces/pizza';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss'
})
export class CreateFormComponent {

  @Output() onCreate = new EventEmitter<Pizza>();

  newPizza:Pizza = {
    id: 0,
    gusto: '',
    prezzo: 0,
    disp: false
  }

  create(){

    const newPizzaCopy = {...this.newPizza};
    this.onCreate.emit(newPizzaCopy)

  }

}
