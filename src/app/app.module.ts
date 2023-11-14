import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReportOneComponent } from './report-one/report-one.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
const appRoutes:Routes=[
{path:"",component:HomeComponent},
{path:"reportone",component:ReportOneComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ReportOneComponent,
    HomeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
