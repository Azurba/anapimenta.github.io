import { Component, Input } from '@angular/core';
import { Depoimento } from 'src/app/Models/Depoimento';

@Component({
  selector: 'app-depoimentos-cards',
  templateUrl: './depoimentos-cards.component.html',
  styleUrls: ['./depoimentos-cards.component.scss']
})
export class DepoimentosCardsComponent {
  @Input() item? : Depoimento;
}
