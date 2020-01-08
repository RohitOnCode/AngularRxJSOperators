import { Component, OnInit } from '@angular/core';
import { MarvelServiceService } from '../services/marvel-service.service';
import { tap, map, filter, mergeMap } from 'rxjs/operators';
import { element } from 'protractor';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';
import { of, Observable, forkJoin, from } from 'rxjs';

@Component({
  selector: 'merge-map-component',
  templateUrl: './merge-map-component.component.html',
  styleUrls: ['./merge-map-component.component.css']
})
export class MergeMapComponentComponent implements OnInit {

  marverCharacterObservable : Observable<any>;
  fetchedCharacters: Array<any>;
  visible : boolean = false;
  fetchedInfo: Array<any> = new Array<any>();
  constructor(private marvelService: MarvelServiceService) { 

    this.marvelService.getMarvelCharacters().pipe(
      tap(character => {
        console.log(character);
      }),
      map(response => response)
    )
      // outer subscription for getting characters
      .subscribe(response => {
        console.log(response);
        this.fetchedCharacters =response;
      this.marverCharacterObservable=  from(response as Array<any>);

         });

     



  }

  ngOnInit() {
  }


  // subscribe inside subscribe call
  utilizeMergeMapTogetCharacters() {
this.visible =true;
    this.marverCharacterObservable.pipe(
      tap(character => {
        console.log(character);
      }),
      map(response => response)
    )
      // outer subscription for getting characters
      .subscribe(character => {
        console.log(character);
          this.marvelService.getCharactersInfo(character).pipe(
            tap(response => {

              console.log(character);
            }),

          )
            // inner subscription for the filtered character
            .subscribe(response =>
              console.log(response));
        

      })
  }




  //with MergeMap

getUsingMergeMap() {
  let count=0;
  this.visible=true
 this.marverCharacterObservable.pipe(
tap(c => console.log(c)),
  mergeMap(marverCharacter => this.marvelService.getCharactersInfo(marverCharacter)) 
 ).subscribe(
   response=>{
     this.fetchedInfo[count]=response[0];
     count++;
     console.log("Response for the observable is" + response[0].characterName);
   }
 )


}

}
