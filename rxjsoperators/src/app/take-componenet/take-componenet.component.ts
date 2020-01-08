import { Component, OnInit } from '@angular/core';
import { tap, map, filter, retry, catchError, take, flatMap } from 'rxjs/operators';
import { MarvelServiceService } from '../services/marvel-service.service';
import { of, Observable, forkJoin } from 'rxjs';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';

@Component({
  selector: 'take-componenet',
  templateUrl: './take-componenet.component.html',
  styleUrls: ['./take-componenet.component.css']
})
export class TakeComponenetComponent implements OnInit {

  fetchedCharacters: Array<any> = new Array<any>();
  marvel;
  dc;
  allHeroes;

  constructor(private marvelService: MarvelServiceService) {
  }

  ngOnInit() {
  }

  utilizeTaketogetCharacters() {

    //forkJoin is used to combine each returned observable into an observable array of values
    forkJoin(
      this.marvelService.getDCCharacters(),
      this.marvelService.getMarvelCharacters()
    )
      .subscribe(value => {

        // observable create function is used to createobservable with a list of values
        Observable.create(function (observer) {

          value.forEach(element => {

            observer.next(element);
          });
          observer.complete();
        })
          .pipe(

            tap(character => {
              console.log(character);
            }),
            map(response => response),
            take(1), // using take to get only DC Characters 
            tap(response => console.log(response))
          ).subscribe(response => {
            console.log(response);
            response.forEach(element => {
              this.fetchedCharacters.push(element);
            })


          })
      })




    console.log(this.fetchedCharacters);
  }

  getDCCharacters() {
    return this.marvelService.getDCCharacters()
  }

  getMarvelCharacters() {
    return this.marvelService.getMarvelCharacters();
  }
}

