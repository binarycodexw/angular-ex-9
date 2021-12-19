import { Component, OnInit } from '@angular/core';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-counter-function',
  templateUrl: './counter-function.component.html',
  styleUrls: ['./counter-function.component.css']
})
export class CounterFunctionComponent implements OnInit {


  constructor(public CounterService: CounterService) { }

  value: any;

  operateCounterSum(){
    this.CounterService.counterSum(this.value);
    }

  operateCounterSubtraction(){
    this.CounterService.counterSubtraction(this.value);
  }

  ngOnInit(): void {
  }

}
