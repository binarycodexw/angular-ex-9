import { Component, OnInit } from '@angular/core';
import { CounterService } from '../shared/counter.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit {

  counter!: Observable<number>;

  constructor(public CounterService: CounterService) { }

  ngOnInit(): void {
    this.counter = this.CounterService.getCounter()
  }

}
