import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter: any = 0;

  constructor() { }

  public getCounter(){
    return this.counter;
  }

  public counterSum(value: number){
    return (this.counter += value ?? 1);
  }

  public counterSubtraction(vale: number){
    this.counter -= vale ?? 1;
    if (this.counter < 0){
      this.counter = 0;
      alert('The total cannot be less than 0');
    }else {
      return(this.counter);
    }
  }
}

