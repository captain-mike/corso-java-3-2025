import { Component } from '@angular/core';
import { Pizza } from '../../interfaces/pizza';
import { PizzaService } from '../../pizza.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  pizze:string[] = [];

  constructor(
    private pizzaSvc:PizzaService
  ){}


  ngOnInit(): void {

    this.pizzaSvc.$cartNames.subscribe(pizza => {
      this.pizze.push(pizza)
    })

  }

}
