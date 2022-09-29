import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormFundicaoComponent } from './form-fundicao/form-fundicao.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { FundicaoComponent } from './fundicao/fundicao.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormFundicaoComponent,
    HomeAdminComponent,
    FundicaoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
