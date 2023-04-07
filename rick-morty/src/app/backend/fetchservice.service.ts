/**
 * Questo service vuole essere un modo per interagire con il backend della api di rick 
 * e morty, scaricandone il contenuto.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { getCharacter, getCharacters } from 'rickmortyapi';
import { Card } from '../riquadro/card';
//per la gestione delle richieste http con il backend


@Injectable({
  providedIn: 'root'
})
export class FetchserviceService {
  cardList : Observable<Card[]>; 
  private cardArray : Card[] = []; //INIZIALIZZA SEMPRE

  constructor() {
    this.cardList = new Observable<Card[]>((observer) => {
      getCharacters({page : 1}).then((res)=>{
        for(let i=0; i< res.data.results.length; i++){
          var temp = { 
            nome: res.data.results[i].name,
            img : res.data.results[i].image,
            stato : res.data.results[i].status
          };
          this.cardArray.push(temp);
         
      }
      console.log("Ho risolto la promise " + this.cardArray[0]);
      observer.next(this.cardArray);
    });
    

    

  });
    
  }



}
