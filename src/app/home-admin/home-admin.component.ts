import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {

  countries: any = [
    "P210", "P21", "P760", "P76"
  ]
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  goToPage(nomePagina: string) {
    this.router.navigate([`${nomePagina}`]);
  }
}
