import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'observables';

  arrayOfRandom:Array<any>=[];
  private subscription:Subscription;

  constructor(){}
  
  ngOnInit(){
    // This is a customly created observable
    const obsrvCustom = new Observable( observer => {
      setInterval( () => {
        const randomNumber=Math.floor(Math.random()*100);
        observer.next(randomNumber);
        if(randomNumber %2==0){

          observer.error(new Error('even number is generated !'));
        }
      },1000);
    }
    );

    this.subscription = obsrvCustom.subscribe(data => { console.log(data);this.arrayOfRandom.push(data) }, error => { console.log(error); alert(error.message); });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
