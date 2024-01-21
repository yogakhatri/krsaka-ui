import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
  imagesPath = ['../../../assets/images/corn.jpg',
    '../../../assets/images/barley.jpg',
    '../../../assets/images/green-grain.jpg',
    '../../../assets/images/black-grain.jpg']

  toggleSideNav() {
    this.toggleSidenav.emit();
  }

  askForLocation() {
    // Implement location functionality
  }

  signIn() {
    // Implement sign-in functionality
  }

  openCart() {
    // Implement cart functionality
  }
}
