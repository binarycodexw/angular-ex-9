import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter: number = 0;

  counterSubject = new BehaviorSubject<number>(this.counter);

  constructor() {this.getCounter().subscribe( data => {
    this.counter = data;
    console.log(this.counter);
  }) };

  public getCounter(): Observable<number> {
    return this.counterSubject.asObservable();
  };

  public counterSum(value: number = 1): void{
    this.counterSubject.next(this.counter += value);
  }

  public counterSubtraction(value: number = 1): void{
    if (this.counter < value){
      this.counterSubject.error("The counter can't be lower than 0. Refresh and retry.");
    }else {
      this.counterSubject.next(this.counter -= value);
    }
    
  }


}

