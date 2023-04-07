import { Component, Input, OnInit } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-riquadro',
  templateUrl: './riquadro.component.html',
  styleUrls: ['./riquadro.component.css']
})
export class RiquadroComponent {

  @Input()
    name : string;

  @Input()
    img : string;
  
  @Input()
    status : string;
}

