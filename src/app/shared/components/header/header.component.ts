import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() navbarStatus = new EventEmitter<boolean>();
  private isNavbarOpen: boolean;

  constructor () {
    this.isNavbarOpen = localStorage.getItem('navbar') ? Boolean(localStorage.getItem('navbar')): true;
  }

  toggleNavbar = () => {
    this.navbarStatus.emit(!this.isNavbarOpen);
    localStorage.setItem('navbar', (!this.isNavbarOpen).toString());
    this.isNavbarOpen = !this.isNavbarOpen;
  };
}
