import { Component } from '@angular/core';
import { PizzaService } from '../../pizza.service';
import { Pizza } from '../../interfaces/pizza';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrl: './modifica.component.scss'
})
export class ModificaComponent {

  pizza!:Pizza;
  isLoading:boolean = true;
  successMessage:string = '';

  constructor(
    private pizzaSvc:PizzaService,
    private route:ActivatedRoute//Contiene informazioni sull'attuale rotta.
  ){}


  ngOnInit(): void {

    //Dall'oggetto ActivatedRoute adesso ottengo un Observable che mi permette di ottenere i parametri della rotta
    this.route.params.subscribe(params => {
      //Per leggere i parametri utilizzo la bracket notation perché typescript non riesce a verificare la presenza dell'ID nell'oggetto params.
      //Ricordati che se devi ottenere un numero dovrai convertirlo come sto facendo io, perché tutti i valori che arrivano dalla rotta sono stringhe
      const id = Number(params['id']);

      //Ora che abbiamo l'ID procediamo a fare la chiamata get singola per ottenere l'oggetto pizza da visualizzare nel form
      this.getSinglePizza(id);

    })

  }

  getSinglePizza(id:number){

    this.pizzaSvc.getById(id)
      .subscribe(pizza => {

        this.pizza = pizza;
        this.isLoading = false;

      })
  }

  save(){
    this.pizzaSvc.update(this.pizza)
    .subscribe(()=>{
      this.successMessage = 'Pizza modificata con successo';
    })
  }


}
