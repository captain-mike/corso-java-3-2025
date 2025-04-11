import { Component, Input } from '@angular/core';
import { Pizza } from '../../interfaces/pizza';

@Component({
  selector: '.app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {

  @Input() singolaPizza!:Pizza;

  get dispText(){
    return this.singolaPizza.disp ? 'Disponibile' : 'Non Disponibile';
  }

}
