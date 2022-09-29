import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteNames } from '../app-contants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  routeNames = RouteNames

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToPage(nomePagina: string) {
    this.router.navigate([`${nomePagina}`]);
  }

}
