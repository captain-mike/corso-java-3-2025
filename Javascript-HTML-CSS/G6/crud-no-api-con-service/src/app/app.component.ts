import { Component } from '@angular/core';
import { Pizza } from './interfaces/pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  isCreatingNewPizza:boolean = false;


}
