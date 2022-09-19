import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  navbarStatus: boolean;
  constructor() { 
    this.navbarStatus = true;
  }

  ngOnInit(): void {
  }

  toggleNavbar = (status: boolean) => {
    // console.log(`parent event ${status}`);
    this.navbarStatus = status;
  }
}
