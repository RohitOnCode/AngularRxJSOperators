import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {tap, map, filter, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelServiceService {

  constructor(private http: HttpClient) { }


  getMarvelCharacters(): Observable<any> {

    return this.http.get("../assets/marvelCharacters.json").pipe(
      map(response => (response as any).characters)
    )

  }


  getDCCharacters(): Observable<any> {

    return this.http.get("../assets/dcCharacters.json").pipe(
      map(response => (response as any).characters)
    )

  }



  getCharactersInfo( character : any) : Observable<any>{
console.log("character name to be fetched" + character.characterName);
    return this.http.get("../assets/charactersInfo.json").
    pipe(
      map(response  => (response as any).characters),
      map(response => (response as Array<any>).filter( c => character.characterName == c.characterName)),
      map(response=>response as Array<any>),
      tap(c=>console.log("fetched" + JSON.stringify(c)))
      )
  }
}
