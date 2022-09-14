import { FormFundicaoComponent } from './form-fundicao/form-fundicao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteNames } from './app-contants';
import { pageTitles } from './helpers/page-title';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: RouteNames.home, component: HomeComponent, data: { title: pageTitles.home } },
  { path: RouteNames.fundicao, component: FormFundicaoComponent, data: { title: pageTitles.fundicao } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
