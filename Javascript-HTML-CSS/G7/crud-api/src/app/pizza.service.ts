import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from './interfaces/pizza';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(
    private http:HttpClient
  ) { }

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

  delete(id:number){
    return this.http.delete(`${environment.apiUrl}/${id}`)
  }

}
