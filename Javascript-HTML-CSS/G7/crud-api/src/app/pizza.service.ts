import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { Pizza } from './interfaces/pizza';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  carrello:Pizza[] = [];

  $cart = new Subject<Pizza>();

  $cartNames  = this.$cart
  .pipe(
    tap(p => this.carrello.push(p)),
    map(p => p.gusto)
  )


  constructor(
    private http:HttpClient
  ) { }


  get cartTotal():number{
    return this.carrello.reduce((acc, p) => acc + p.prezzo, 0)
  }

  addToCart(pizza:Pizza):void{
    this.$cart.next(pizza);
  }

  getAll():Observable<Pizza[]>{
    return this.http.get<Pizza[]>(environment.apiUrl)
  }

  getById(id:number):Observable<Pizza>{
    return this.http.get<Pizza>(`${environment.apiUrl}/${id}`)
  }

  create(newPizza:Partial<Pizza>):Observable<Pizza>{
    return this.http.post<Pizza>(environment.apiUrl, newPizza)
  }

  update(pizza:Pizza):Observable<Pizza>{
    return this.http.put<Pizza>(`${environment.apiUrl}/${pizza.id}`, pizza);
  }

  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${environment.apiUrl}/${id}`)
  }

}
