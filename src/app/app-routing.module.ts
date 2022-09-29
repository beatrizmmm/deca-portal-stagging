import { HomeAdminComponent } from './home-admin/home-admin.component';
import { FundicaoComponent } from './fundicao/fundicao.component';
import { FormFundicaoComponent } from './form-fundicao/form-fundicao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteNames } from './app-contants';
import { pageTitles } from './helpers/page-title';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'home' } },
  { path: 'fundicao', component: FundicaoComponent, data: { title: 'fundicao' } },
  { path: 'form-fundicao', component: FormFundicaoComponent, data: { title: 'form-fundicao' } },
  { path: 'home-admin', component: HomeAdminComponent, data: { title: 'form-fundicao' } },
  { path: '', redirectTo: `/home`, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
