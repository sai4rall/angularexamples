import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  baseURL: string = "https://api.github.com/";
  dataL=[];
  constructor(private http: HttpClient) {
  }
 

 
  LoadReport1(){
    this.http.get(this.baseURL + 'users/' + "sai4rall" + '/repos').pipe()
    .subscribe((data: any) => {
      console.log(data);
      this.dataL=data;
    });
}
}
