import { Component } from '@angular/core';
import { AgendamentoOptions } from 'src/app/Data/AgendamentoOptions';
import { Agendamento } from 'src/app/Models/Agendamento';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent {

  agendamentoInfo : Agendamento[];

  constructor(private _agendamentoInfo: AgendamentoOptions ) {
    this.agendamentoInfo = _agendamentoInfo.agendamentoInfo;
  }

  clickWhatsap(link : string){
    window.open(link);
  }
}
