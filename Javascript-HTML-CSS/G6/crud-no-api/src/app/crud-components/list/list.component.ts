import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../../interfaces/pizza';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @Output() onEditRequest = new EventEmitter<Pizza>();
  @Output() onDelete = new EventEmitter<number>();

  @Input() inputPizze: Pizza[] = []

  delete(id:number) {
    this.onDelete.emit(id)
  }

  editRequest(pizza:Pizza) {
    this.onEditRequest.emit(pizza)
  }

}
