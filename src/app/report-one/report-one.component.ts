import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, ViewChild, booleanAttribute } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-report-one',
  templateUrl: './report-one.component.html',
  styleUrls: ['./report-one.component.css']
})
export class ReportOneComponent {
  baseURL: string = "https://api.github.com/";
  loading:boolean=false;
  reportData:{id:string,name:string}[]=[];
  dataloaded:boolean=false;

  constructor(private http: HttpClient){
  }
onSubmit(form: NgForm){
  this.dataloaded=false;
  this.loading=true;
  let searchparams: HttpParams=new HttpParams();
  this.reportData=[];
  console.log(form.value)
  if(form.value.field0 !== ""){
    searchparams=searchparams.append("field0",form.value.field0);
  }


    this.http.get(this.baseURL + 'users/' + "sai4rall" + '/repos',{
      params: searchparams
    })
    .subscribe((data: any) => {
      this.loading=false;
      for (let i = 0; i < data.length; i++) {
        this.reportData.push({id:data[i].id,name:data[i].name})
        this.dataloaded=true;
      }
      console.log(this.reportData);

    },
    (error) => {
      this.loading=false;
      console.log('oops', error)
    })
  

}
allSelected = false;




toggleAllSelection(skillSel: MatSelect) {
  this.allSelected = !this.allSelected;  // to control select-unselect
  
  if (this.allSelected) {
    skillSel.options.forEach( (item : MatOption) => item.select());
  } else {
    skillSel.options.forEach( (item : MatOption) => {item.deselect()});
  }
  //skillSel.close();
}


}
