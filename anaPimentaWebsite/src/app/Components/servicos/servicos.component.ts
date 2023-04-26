import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent {
   servicos : string[] = ['Odontologia e Clínica Geral', 'Odontología Pediátrica', 'Próteses', 'Harmonização Oro-facial', 'Aplicação de toxina botulínica','Aplicação de Acido hialurônico para preenchimentos e remodelação facial', 'Aplicação de bio estimuladores' , 'Aplicação de fios de PDO para tração e estímulo de colágeno']
   iconsC : string[] = ['check', 'check', 'check', 'check', 'check', 'check', 'check', 'check']
   iconsX : string[] = ['x', 'x', 'x', 'check', 'check', 'check', 'check', 'check']
}
