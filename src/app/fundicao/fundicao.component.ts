import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundicao',
  templateUrl: './fundicao.component.html',
  styleUrls: ['./fundicao.component.scss']
})
export class FundicaoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToPage(nomePagina: string) {
    this.router.navigate([`${nomePagina}`]);
  }

}
