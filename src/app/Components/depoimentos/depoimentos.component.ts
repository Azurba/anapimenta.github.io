import { Component } from '@angular/core';
import { Depoimentos } from 'src/app/Data/Depoimentos';
import { Depoimento } from 'src/app/Models/Depoimento';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent {
  depoimentosArray : Array<Depoimento> = [];

  constructor(private _depoimentos : Depoimentos){
    this.depoimentosArray = _depoimentos.depoimentosArray;
  }

  range(n: number): Array<number> {
    return Array.from({length: n}, (_, i) => i);
  }

  navigateTo(link : string) {
    window.open(link);
  }
}
