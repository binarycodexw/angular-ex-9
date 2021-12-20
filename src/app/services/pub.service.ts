import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { find } from 'rxjs/operators'
import { Beer, Type } from "../interfaces/beer";

@Injectable({
  providedIn: 'root'
})
export class PubService {

  beers:Beer[] =[
    {
      id:1,
      type: Type.small,
      name: 'Ichnusa',
      price: 2
    },
    {
      id:2,
      type: Type.small,
      name: 'Ceres',
      price: 2
    },
    {
      id:3,
      type: Type.small,
      name: 'Tuborg',
      price: 2
    },
    {
      id:4,
      type: Type.small,
      name: 'Bios',
      price: 4
    },
    {
      id:5,
      type: Type.small,
      name: 'Small Beer',
      price: 3
    },
    {
      id:6,
      type: Type.medium,
      name: 'Corona',
      price: 3
    },
    {
      id:7,
      type: Type.medium,
      name: 'Moretti',
      price: 3
    },
    {
      id:8,
      type: Type.medium,
      name: 'Heineken',
      price: 3
    },
    {
      id:9,
      type: Type.medium,
      name: 'Peroni',
      price: 3
    },
    {
      id:10,
      type: Type.medium,
      name: 'Nastro Azzurro',
      price: 3
    },

  ];

  private beer$ = from(this.beers);

  constructor() { }

  returnBeer(): Observable<Beer>{
    return this.beer$;
  }

  findBeer (beerName: string, beerType: string): Observable<Beer | undefined>{
    return this.beer$.pipe(find(beer => beer.name == beerName && beer.type == beerType))
  }
}
