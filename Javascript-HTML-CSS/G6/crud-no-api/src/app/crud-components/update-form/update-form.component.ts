import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../../interfaces/pizza';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.scss'
})
export class UpdateFormComponent {

  @Input() pizzaDaModificare!:Pizza;
  @Output() onEditPizza = new EventEmitter<Pizza>()

  update(){

    this.onEditPizza.emit(this.pizzaDaModificare);

  }

}
