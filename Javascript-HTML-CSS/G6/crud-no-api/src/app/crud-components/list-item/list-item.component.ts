import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../../interfaces/pizza';

@Component({
  selector: '.app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {

  @Input() singolaPizza!:Pizza;
  @Output() onEditRequest = new EventEmitter<Pizza>();
  @Output() onDelete = new EventEmitter<number>();

  get dispText(){
    return this.singolaPizza.disp ? 'Disponibile' : 'Non Disponibile';
  }

  delete(){
    this.onDelete.emit(this.singolaPizza.id)
  }

  select(){
    this.onEditRequest.emit(this.singolaPizza)
  }

}
