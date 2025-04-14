import { Component } from '@angular/core';
import { Pizza } from '../../interfaces/pizza';
import { PizzaService } from '../../pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  pizze:Pizza[] = [];
  isLoading:boolean = true;

  constructor(
    private pizzaSvc:PizzaService
  ){}

  ngOnInit(){

    this.pizzaSvc.getAll()
    .subscribe(pizze => {

      this.pizze = pizze;

      this.isLoading = false;

    })

  }

  addToCart(pizza:Pizza){
    this.pizzaSvc.addToCart(pizza)
  }

  delete(id:number){

    this.pizzaSvc.delete(id)
    .subscribe(data=>{

      this.pizze = this.pizze.filter(p => p.id != id)

    })
  }

}
