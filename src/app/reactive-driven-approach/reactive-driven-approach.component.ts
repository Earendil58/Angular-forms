import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-driven-approach',
  templateUrl: './reactive-driven-approach.component.html',
  styleUrls: ['./reactive-driven-approach.component.css']
})
export class ReactiveDrivenApproachComponent implements OnInit{

  registerForm!: FormGroup;

  ngOnInit(): void {
      this.registerForm = new FormGroup({
        'fullName': new FormControl(null),
        'email': new FormControl(null),
        'position': new FormControl(null),
        'password': new FormControl(null)
      });
  }

  onSubmit(){
    console.log(this.registerForm.value);
  }

}
