import { Component } from '@angular/core';

import { faBox, faWaveSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

  faBox = faBox
  faWaveSquare = faWaveSquare
  faClock = faClock
  faTrello = faTrello

}
