import { Component, OnInit } from '@angular/core';
import { RouteNames } from '../app-contants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  routeNames = RouteNames

  constructor() { }

  ngOnInit(): void {
  }

}
