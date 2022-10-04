import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerir-fundicao',
  templateUrl: './gerir-fundicao.component.html',
  styleUrls: ['./gerir-fundicao.component.scss']
})
export class GerirFundicaoComponent implements OnInit {

  countries: any = [
    "P210", "P21", "P760", "P76", "P380"
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToPage(nomePagina: string) {
    this.router.navigate([`${nomePagina}`]);
  }
}
