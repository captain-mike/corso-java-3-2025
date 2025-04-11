import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../../interfaces/pizza';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {



  @Input() inputPizze: Pizza[] = []

  delete(id:number) {
  }

  editRequest(pizza:Pizza) {

  }

}
