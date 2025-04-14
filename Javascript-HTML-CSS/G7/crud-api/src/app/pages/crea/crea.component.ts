import { Component } from '@angular/core';
import { Pizza } from '../../interfaces/pizza';
import { PizzaService } from '../../pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crea',
  templateUrl: './crea.component.html',
  styleUrl: './crea.component.scss'
})
export class CreaComponent {

  newPizza:Partial<Pizza> = {};
  isLoading:boolean = false;

  constructor(
    private pizzaSvc:PizzaService,
    private router:Router
  ){}

  addPizza(){

    this.isLoading = true

    this.pizzaSvc.create(this.newPizza)
    .subscribe(pizza => {

      this.isLoading = false

      //se la pizza viene creata avviso l'utente
      alert('Pizza creata con successo');

      setTimeout(()=>{
        //dopo 5 secondi faccio un redirect alla home
        this.router.navigate(['/']);

      }, 5000)
    });
  }

}
