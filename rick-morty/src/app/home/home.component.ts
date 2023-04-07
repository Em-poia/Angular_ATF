import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FetchserviceService } from '../backend/fetchservice.service';
import { RiquadroComponent } from '../riquadro/riquadro.component';
import { Card } from '../riquadro/card';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
  cardArray : Card[]; 
  flag : boolean = false;
  constructor (private service : FetchserviceService){ 
      //this.name = JSON.stringify(res.data.);

      service.cardList.subscribe((array) => {
        console.log("Questo mi è arrivato\n");
        this.cardArray = array.slice();
        console.log(this.cardArray);
        /*
        for(let i of array){
          this.nameArray.push(i.nome);
        }
        */
        this.flag = true;
      })
      
  };
  /* da finire
  subArray = function(array: Card[], numero: number){
    let l = array.length;
    for(let i = 0; i < l / numero; i++){

    }
  }
  */

  @Input()
    title : string;
  
  @Output()
    size = new EventEmitter<string>();

  eventSize(){
    this.size.emit("Yeee"); 
  }
}