import { Component } from '@angular/core';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {

  sub!:Subscription;

  ngOnInit() {

    const intervallo = new Observable<number>(observer => {

      let count = 0;
      setInterval(() => {

        observer.next(count)//invio un nuovo dato

        // if (count > 10) {
        //   observer.error(count)//invio un errore
        // }

        // if(count == 20){
        //   observer.complete()
        // }
        count++;
      }, 1000);

    });


    this.sub = intervallo
    .pipe(
      filter(n => n > 5),
      map(n => `Esecuzione n°${n}`)
    )
    .subscribe({
      next: n => console.log('next:',n),
      error: n => console.log(n),
      complete: () => console.log('complete')
    })

  }

  ngOnDestroy(): void {

    this.sub.unsubscribe();//disiscrivo per evitare timer multipli
  }

}
