import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() country!:string;
  @Input() flag!:string;
  @Input() region!:string;
  @Input() capital!:string;
  @Input() location!:string;
  @Input() independent!:boolean;
  
}
