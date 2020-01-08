import { Component, OnInit } from '@angular/core';
import { MarvelServiceService } from '../services/marvel-service.service';
import {tap, map, filter, retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'tap-component',
  templateUrl: './tap-component.component.html',
  styleUrls: ['./tap-component.component.css']
})
export class TapComponentComponent implements OnInit {


  fetchedCharacters;
  constructor(private marvelService : MarvelServiceService) { }

  ngOnInit() {
  }

utilizeTaketogetCharacters() {

  this.marvelService.getMarvelCharacters().pipe(
    tap( character => {
      console.log(character);
    }),
    map(response=> response)
  ).subscribe(response => {
    console.log(response);
    this.fetchedCharacters=response
  })
}
}
