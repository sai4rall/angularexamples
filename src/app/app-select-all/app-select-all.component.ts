import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-app-select-all',
  templateUrl: './app-select-all.component.html',
  styleUrls: ['./app-select-all.component.css']
})
export class AppSelectAllComponent {
  
  @Input("vals") matValues:string[];
  toppings = new FormControl();
  SelectAll(mSelect:MatSelect){
    mSelect.options.forEach( (item : MatOption) => item.select());
  }
  deSelectAll(mSelect:MatSelect){
    mSelect.options.forEach( (item : MatOption) => item.deselect());
  }
  isAllSelected(mSelect:MatSelect){
    let isAllSelected:boolean=false;
    mSelect.options.forEach( (item : MatOption) => {
      if(item.selected){
        isAllSelected=true;
      }
    });
   return isAllSelected;
  }

  toggleAllSelection(mSelect:MatSelect){
  console.log(mSelect)
    if(!this.isAllSelected(mSelect)){
      this.SelectAll(mSelect)
    }else{
      this.deSelectAll(mSelect)
    }
  }
  isIntermediate(mSelect:MatSelect,mCheck:MatCheckbox){
    if(mSelect.value.length>0){
         if(this.matValues.length==mSelect.value.length){
           mCheck.checked=true;
           mCheck.indeterminate=false;

         }else{
           mCheck.indeterminate=true;
         }
    }else{
      mCheck.checked=false;
      mCheck.indeterminate=false;

    }
  }
}
