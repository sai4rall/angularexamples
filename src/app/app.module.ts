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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { SelectCheckAllComponent } from './select-check-all/select-check-all.component';


const appRoutes:Routes=[
{path:"",component:HomeComponent},
{path:"reportone",component:ReportOneComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ReportOneComponent,
    HomeComponent,
    SelectCheckAllComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
     ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
