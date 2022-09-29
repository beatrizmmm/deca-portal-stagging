import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-fundicao',
  templateUrl: './form-fundicao.component.html',
  styleUrls: ['./form-fundicao.component.scss']
})
export class FormFundicaoComponent implements OnInit {
  // contagemEstoque: FormGroup

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToPage(nomePagina: string) {
    this.router.navigate([`${nomePagina}`]);
  }

  // contagemEstoques() {
  //   this.contagemEstoque = this.fb.group({
  //     P210: ['', Validators.compose([Validators.required])],
  //     P21: ['', Validators.compose([Validators.required])],
  //     P760: ['', Validators.compose([Validators.required])],
  //     P76: ['', Validators.compose([Validators.required])],
  //     P380: ['', Validators.compose([Validators.required])]
  //   })
  // }
}
