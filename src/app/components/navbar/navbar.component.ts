import { Component } from '@angular/core';

//Icons
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  faBell = faBell
  faInfoCircle = faInfoCircle

  isOpen = false;
  isOpenBody = false;

  alert(){
    alert()
  }
}
