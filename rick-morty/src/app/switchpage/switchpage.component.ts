import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-switchpage',
  templateUrl: './switchpage.component.html',
  styleUrls: ['./switchpage.component.css']
})
export class SwitchpageComponent {

  @Input()
    selector : string;

  switchPage() {
    
    if(this.selector == "avanti"){
      console.log("vado avanti")
    }
    if(this.selector == "indietro"){
      console.log("vado indietro");
    }
  }
}
