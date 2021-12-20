import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../interfaces/beer';
import { PubService } from '../services/pub.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  beer$!: Observable<Beer | undefined>;
  BeerName!:string;
  BeerSize!:string

  constructor(public beerService: PubService) { }

  beers:Beer[] = this.beerService.beers

  ngOnInit(): void {
  }

  cliccato(){
    this.beer$ = this.beerService.findBeer(this.BeerName, this.BeerSize)
  }

}
