import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from '../../interfaces/pizza';
import { PizzaService } from '../../pizza.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  pizze: Pizza[] = []
  constructor(
    private pizzaSvc: PizzaService
  ){}

  ngOnInit(){
    this.pizze = this.pizzaSvc.pizze;
  }

}
