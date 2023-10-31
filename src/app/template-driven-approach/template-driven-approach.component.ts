import { Component, OnInit } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-approach',
  templateUrl: './template-driven-approach.component.html',
  styleUrls: ['./template-driven-approach.component.css']
})
export class TemplateDrivenApproachComponent implements OnInit{

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){
    console.log(form.value)
  }

  forbiddenNameValidator(control: AbstractControl): {[key: string]: boolean} | null{
    const value = control.value
    if(value === 'Carlos'){
      return {'forbiddenName': true}
    }
    return null
  }

}
