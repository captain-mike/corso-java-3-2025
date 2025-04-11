import { Component, EventEmitter, Output } from '@angular/core';
import { Pizza } from '../../interfaces/pizza';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss'
})
export class CreateFormComponent {


  newPizza:Pizza = {
    id: 0,
    gusto: '',
    prezzo: 0,
    disp: false
  }

  create(){



  }

}
